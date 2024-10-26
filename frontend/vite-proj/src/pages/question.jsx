import { useState } from "react";

export default function Question({
  currentIndex,
  nextClick,
  backClick,
  question,
}) {
  const [answer, setAnswer] = useState("");

  function handleNextClick() {
    nextClick(answer);
  }
  return (
    <div className="min-h-[600px] w-[400px] rounded-lg bg-blue-500 shadow-lg">
      {question}
      <button className="btn btn-secondary" onClick={() => setAnswer("no")}>
        No
      </button>
      <button className="btn btn-secondary" onClick={() => setAnswer("yes")}>
        Yes
      </button>
      <button onClick={backClick} className="btn btn-primary">
        back
      </button>
      <button onClick={handleNextClick} className="btn btn-primary">
        next
      </button>
    </div>
  );
}
