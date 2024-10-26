import { useState } from "react";

export default function Survey({ questions }) {
  const initialAnswers = questions.map((item, index) => "");

  const [answers, setAnswers] = useState(initialAnswers);
  const [error, setError] = useState(false);

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkAnswers(answers)) {
      setError(true);
      return;
    }
    console.log("Selected Answers:", answers);
    setSubmitted(true);
  };

  function checkAnswers(answers) {
    let check = true;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === "") {
        check = false;
        break;
      }
    }
    return check;
  }

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index} className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">{question}</h3>
          <div className="flex justify-center space-x-4">
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="yes"
                checked={answers[index] === "yes"}
                onChange={() => handleChange(index, "yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="no"
                checked={answers[index] === "no"}
                onChange={() => handleChange(index, "no")}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      ))}
      {error && (
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">
            Please select an answer for each question
          </span>
        </div>
      )}
      <button
        type="submit"
        className="my-3 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}
