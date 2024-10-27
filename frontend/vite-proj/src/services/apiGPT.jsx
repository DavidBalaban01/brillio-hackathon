async function callChatGPTAPI(prompt, parseJson = true) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const data = {
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    max_tokens: 2000,
    temperature: 0.7,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    const content = result.choices[0].message.content;

    // Validate and parse JSON
    let parsedContent;
    try {
      if (parseJson) {
        parsedContent = JSON.parse(content.trim());
      } else {
        return content;
      }
    } catch (parseError) {
      console.error("Failed to parse JSON response from ChatGPT:", parseError);
      throw new Error("Failed to parse JSON response from ChatGPT.");
    }

    return parsedContent;
  } catch (error) {
    console.error("Failed to fetch from ChatGPT API:", error);
    throw error; // Re-throw the error so it can be handled by the caller if needed
  }
}
// Function to generate yes/no questions
export async function generateYesNoQuestions(topic, limit = 4) {
  const prompt = `
    Generate a list of ${limit} yes/no (very important) questions that could help a medical professional investigate symptoms related to "${topic}".
    The questions should clarify associated symptoms, potential causes, or factors that may narrow down the diagnosis.
    Format the response as a JSON array of strings, with each question as a separate string element.
    Example format: ["Question 1", "Question 2", ..., "Question ${limit}"]
    Do not use any delimiters like \`\`\`json or other extra characters.
`;

  // Call the API and get the parsed JSON result
  const json_results = await callChatGPTAPI(prompt);
  console.log(json_results);
  return json_results;
}

export async function generateSummary(original_prompt, answers) {
  const prompt = `
    Given this original prompt ${original_prompt} from a patient, he has answered the following questions: ${answers}.
    Please generate a description of the patient's symptoms in order for a potential doctor to better analyze the patient.
    Also think of a degree of urgency/severity from 1 to 10 - and potential further investigations.
    Do not use any delimiters like \`\`\`json or other extra characters.
`;

  console.log("prompt", prompt);
  // Call the API and get the parsed JSON result
  const json_results = await callChatGPTAPI(prompt, false);
  console.log("SUMMARY: " + json_results);

  generateCondition(json_results)
  return json_results;
}

export async function generateCondition(text) {
  const prompt = `
  Given this text: "${text}" please try to come up with a concise condition in a few words (No other text, just the condition) similar to the ones in this big list:
  "Viral sinusitis (disorder);Chronic sinusitis (disorder);Acute bronchitis (disorder);Laceration of foot;Streptococcal sore throat (disorder);Acute viral pharyngitis (disorder);Otitis media;Sprain of wrist;Acute bacterial sinusitis (disorder);Normal pregnancy;Impacted molars;Fracture of forearm;Cystitis;Body mass index 30+ - obesity (finding);Prediabetes;Fetus with unknown complication;Miscarriage in first trimester;Anemia (disorder);Sinusitis (disorder);Hypertension;Whiplash injury to neck;Escherichia coli urinary tract infection;Laceration of forearm;Sprain of ankle;Atrial Fibrillation;Laceration of thigh;Malignant neoplasm of breast (disorder);Osteoarthritis of knee;Preeclampsia;Facial laceration;Childhood asthma;Fracture of clavicle;Perennial allergic rhinitis with seasonal variation;Concussion with no loss of consciousness;Acute allergic reaction;Hyperlipidemia;Recurrent urinary tract infection;Polyp of colon;Coronary Heart Disease;Osteoarthritis of hip;Stroke;Blighted ovum;Tubal pregnancy;Fracture of the vertebral column with spinal cord injury;Seasonal allergic rhinitis;Atopic dermatitis;Fracture of ankle;History of cardiac arrest (situation);Cardiac Arrest;Second degree burn;Fracture subluxation of wrist;Metabolic syndrome X (disorder);Hypertriglyceridemia (disorder);Diabetes;Fracture of rib;Antepartum eclampsia;Drug overdose;Chronic intractable migraine without aura;Chronic pain;Osteoporosis (disorder);History of single seizure (situation);Seizure disorder;Idiopathic atrophic hypothyroidism;Epilepsy;Perennial allergic rhinitis;History of myocardial infarction (situation);Myocardial Infarction;Localized  primary osteoarthritis of the hand;Diabetic renal disease (disorder);Chronic kidney disease stage 1 (disorder);Nonproliferative diabetic retinopathy due to type 2 diabetes mellitus (disorder);Diabetic retinopathy associated with type II diabetes mellitus (disorder);Neuropathy due to type 2 diabetes mellitus (disorder);Hyperglycemia (disorder);Body mass index 40+ - severely obese (finding);Laceration of hand;Carcinoma in situ of prostate (disorder);Neoplasm of prostate;Injury of tendon of the rotator cuff of shoulder;History of appendectomy;Appendicitis;Pulmonary emphysema (disorder);Alcoholism;Major depression disorder;Burn injury(morphologic abnormality);Rupture of patellar tendon;Concussion with loss of consciousness;Child attention deficit disorder;Injury of medial collateral ligament of knee;Recurrent rectal polyp;Contact dermatitis;Familial Alzheimer's disease of early onset (disorder);Microalbuminuria due to type 2 diabetes mellitus (disorder);Chronic kidney disease stage 2 (disorder);Malignant tumor of colon;Protracted diarrhea;Bleeding from anus;Non-small cell carcinoma of lung  TNM stage 1 (disorder);Non-small cell lung cancer (disorder);Suspected lung cancer (situation);First degree burn;Chronic congestive heart failure (disorder);Chronic obstructive bronchitis (disorder);Tear of meniscus of knee;Fracture of vertebral column without spinal cord injury;Smokes tobacco daily;Gout;Rupture of appendix;Pneumonia;Alzheimer's disease (disorder);Opioid abuse (disorder);Concussion injury of brain;Metastasis from malignant tumor of prostate (disorder);Closed fracture of hip;Rheumatoid arthritis;Overlapping malignant neoplasm of colon;Macular edema and retinopathy due to type 2 diabetes mellitus (disorder);Pathological fracture due to osteoporosis (disorder);Brain damage - traumatic;Secondary malignant neoplasm of colon;Bullet wound;Proliferative diabetic retinopathy due to type II diabetes mellitus (disorder);Injury of anterior cruciate ligament;Pyelonephritis;Primary fibromyalgia syndrome;Primary malignant neoplasm of colon;Primary small cell malignant neoplasm of lung  TNM stage 1 (disorder);Small cell carcinoma of lung (disorder);Major depression  single episode"
`;

  // Call the API and get the parsed JSON result
  const json_results = await callChatGPTAPI(prompt, false);
  console.log("CONDITION: " + json_results);

  callPredictAPI(json_results)
  return json_results;
}

export async function callPredictAPI(medical_condition) {
  const apiUrl = "https://3869-86-124-123-68.ngrok-free.app/predict";

  const data = {
    input_data: medical_condition,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST", // Changed to POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send data in the request body
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    // Parse the JSON response
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    return responseData; // Return the data for further use
  } catch (error) {
    console.error("Failed to fetch from Predict API:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}

