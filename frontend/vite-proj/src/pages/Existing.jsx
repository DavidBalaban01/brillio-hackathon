import { useState } from "react";
import Container from "../ui/Container";

const patientRecords = [
  {
    id: 1,
    start_date: "2024-01-10",
    end_date: "2024-01-20",
    condition: "Hypertension",
    specialty: "Cardiology",
    medication: "Lisinopril",
  },
  {
    id: 2,
    start_date: "2024-02-05",
    end_date: "2024-02-15",
    condition: "Type 2 Diabetes",
    specialty: "Endocrinology",
    medication: "Metformin",
  },
  {
    id: 3,
    start_date: "2024-03-01",
    end_date: "2024-03-10",
    condition: "Asthma",
    specialty: "Pulmonology",
    medication: "Albuterol",
  },
  {
    id: 4,
    start_date: "2024-04-12",
    end_date: "2024-04-22",
    condition: "Hyperlipidemia",
    specialty: "Cardiology",
    medication: "Atorvastatin",
  },
  {
    id: 5,
    start_date: "2024-05-07",
    end_date: "2024-05-17",
    condition: "Osteoarthritis",
    specialty: "Rheumatology",
    medication: "Celecoxib",
  },
  {
    id: 6,
    start_date: "2024-06-15",
    end_date: "2024-06-25",
    condition: "Anxiety",
    specialty: "Psychiatry",
    medication: "Sertraline",
  },
];

export default function Existing() {
  const [inputText, setInputText] = useState();
  const [showData, setShowData] = useState(false);

  function handleSubmit() {
    setShowData(true);
  }

  return (
    <Container>
      <div
        className="rounded-lg bg-white p-6"
        style={{
          width: "700px",
          height: "500px",
          margin: "0px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {!showData && (
          <div>
            <header className="mb-6">
              <h1 className="font-title mb-2 text-2xl text-neutral-950">
                Please enter your Patient ID
              </h1>
            </header>
            <input
              className="h-[56px] w-full rounded-md border border-neutral-300 p-2"
              // rows="2"
              placeholder="Enter your text..."
              // className="w-.25 mb-4 rounded-xl border border-neutral-300 p-2 text-neutral-950"
              onChange={(e) => setInputText(e.target.value)}
            />

            <button className="btn btn-primary mt-4" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}

        {showData && (
          <div>
            <h1
              className="font-title mb-2 text-2xl text-neutral-950"
              style={{ marginBottom: "2rem" }}
            >
              Here you can see all your medical history
            </h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Condition</th>
                  <th>Specialty</th>
                  <th>Medication</th>
                </tr>
              </thead>
              <tbody>
                {patientRecords.map((item) => (
                  <Row data={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
}

function Row({ data }) {
  return (
    <tr>
      <td>{data.start_date}</td>
      <td>{data.end_date}</td>
      <td>{data.condition}</td>
      <td>{data.specialty}</td>
      <td>{data.medication}</td>
    </tr>
  );
}
