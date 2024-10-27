import { useState } from "react";
import Container from "../ui/Container";

export default function Doctor() {
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
                Please enter your Doctor ID
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

        {showData && <div>Treated Pacients</div>}
      </div>
    </Container>
  );
}
