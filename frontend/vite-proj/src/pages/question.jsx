import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Question({ nextClick, backClick, question, answers }) {
  const [answer, setAnswer] = useState("");
  const [tempAnswer, setTempAnswer] = useState("");

  function handleNextClick() {
    if (answer === "") return;
    nextClick(answer);
    setAnswer("");
  }

  return (
    <div
      className="flex gap-3 rounded-lg bg-white p-6"
      style={{
        width: "700px",
        height: "500px",
        margin: "0px auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div style={{ display: "flex" }}> */}
      <h2 className="font-title mb-4 text-xl text-neutral-950">{question}</h2>
      {/* <h2 className="font-title mb-4 text-xl text-neutral-950">
        Does the pain worsen with activity or movement?
      </h2> */}
      <div className="mb-6 flex justify-center">
        <label className="mr-6 flex items-center text-lg">
          <input
            type="radio"
            name="agreement"
            checked={answer == "no"}
            onChange={() => setAnswer("no")}
            className="mr-2 h-[20px] w-[20px]"
          />
          No
        </label>

        <label className="flex items-center text-lg">
          <input
            type="radio"
            name="agreement"
            value="yes"
            checked={answer == "yes"}
            onChange={() => setAnswer("yes")}
            className="mr-2 h-[20px] w-[20px]"
          />
          Yes
        </label>
      </div>

      <div className="mt-10 flex justify-between gap-3">
        <button
          className="btn btn-primary flex h-[40px] w-[40px] flex-row items-center justify-center rounded-full p-2"
          onClick={backClick}
        >
          <span className="material-symbols-outlined">
            <FaArrowLeft />
          </span>
        </button>

        <button
          className="btn btn-primary flex h-[40px] w-[40px] flex-row items-center justify-center rounded-full p-2"
          onClick={handleNextClick}
        >
          <span className="material-symbols-outlined">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
    // </div>
  );
}
