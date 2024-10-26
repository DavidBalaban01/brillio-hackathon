import { useState } from "react";

export default function Survey({ questions }) {
  const questionsData = questions;

  const answers = {};
  questionsData.forEach((_, index) => {
    answers[index] = "";
  });

  const [selectedAnswers, setSelectedAnswers] = useState(answers);

  const handleChange = (index, event) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [index]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Answers:", selectedAnswers);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questionsData.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="mb-2 text-neutral-950">{item.question}</h3>
          <div className="flex justify-center gap-4">
            {Object.entries(item.options).map(([key, value]) => (
              <div className="mb-2" key={key}>
                <label>
                  <input
                    type="radio"
                    name={`answer-${index}`}
                    value={key}
                    checked={selectedAnswers[index] === key}
                    onChange={(e) => handleChange(index, e)}
                    className="mr-2"
                  />
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}
