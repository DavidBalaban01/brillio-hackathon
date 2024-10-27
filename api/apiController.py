from flask import Flask, request, jsonify
import torch
import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all CORS requests

# Device configuration
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

class SentenceTransformerWithHead(torch.nn.Module):
    def __init__(self, curr_device=torch.device("cpu")):
        super(SentenceTransformerWithHead, self).__init__()
        
        # Load the pretrained sentence transformer
        self.sentence_transformer = SentenceTransformer('sentence-transformers/multi-qa-mpnet-base-dot-v1')
        
        self.head = torch.nn.Linear(768, 768)
        self.device = curr_device
        self.to(self.device)
    
    def forward(self, input_text):
        embeddings = self.sentence_transformer.encode(
            input_text,
            convert_to_tensor=True,
            device=self.device
        )
        output = self.head(embeddings)
        return output


# Load the trainable model
model_trainable = SentenceTransformerWithHead(curr_device=device)
model_trainable.load_state_dict(torch.load("../ml-engine/src/model-saves/trainable_state_dict.pth", map_location=device))
model_trainable.to(device)
model_trainable.eval()

# Load the non-trainable model
model_non_trainable = SentenceTransformer("../ml-engine/src/model-saves/non_trainable_model")
model_non_trainable.to(device)
model_non_trainable.eval()

# Load and process specialties
specialty_unique_doctors = pd.read_csv("./unique_specialty.csv")
specialty_unique_doctors = specialty_unique_doctors.dropna(subset=["SPECIALTY"])
specialty_unique_doctors["SPECIALTY"] = specialty_unique_doctors["SPECIALTY"].astype(str)
specialty_unique = specialty_unique_doctors["SPECIALTY"].str.strip().tolist()
specialty_unique = [sp for sp in specialty_unique if sp != '']

# Precompute doctor embeddings
def compute_doctor_embeddings(model, specialties, batch_size=32):
    model.eval()
    embeddings_list = []
    with torch.no_grad():
        for i in range(0, len(specialties), batch_size):
            batch_texts = specialties[i:i+batch_size]
            embeddings = model.encode(batch_texts, convert_to_tensor=True, device=device)
            embeddings_list.append(embeddings)
    return torch.cat(embeddings_list, dim=0)

doctor_embeddings = compute_doctor_embeddings(model_non_trainable, specialty_unique, batch_size=32)
doctor_embeddings = doctor_embeddings.to(device)

def knn(text, device, k=5):
    with torch.no_grad():
        text_embedding = model_trainable([text]).to(device)
    distances = torch.norm(doctor_embeddings - text_embedding, dim=1)
    nearest_indices = torch.topk(distances, k, largest=False).indices
    nearest_doctors = [specialty_unique[i] for i in nearest_indices.cpu().numpy()]
    return nearest_doctors

# Define the API endpoint
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if data and 'input_data' in data:
        input_data = data['input_data']
        if not isinstance(input_data, str) or not input_data.strip():
            return jsonify({'error': 'Invalid input_data'}), 400
    else:
        return jsonify({'error': 'No input_data provided'}), 400

    output = knn(input_data, device, k=5)
    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True, port = 5001, host = "0.0.0.0")
