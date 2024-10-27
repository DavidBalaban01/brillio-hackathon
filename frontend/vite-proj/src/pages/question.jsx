import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SegmentedProgressBar from "./ProgressView";


export default function Question({
  nextClick,
  backClick,
  question,
  answers,
}) {
  const [answer, setAnswer] = useState("");
  const [tempAnswer, setTempAnswer] = useState("");

  function handleNextClick() {
    if (answer === "") return;
    nextClick(answer);
    setAnswer("");
  }

  return (
    <div className="h-[250px] w-[400px] rounded-lg bg-white p-6">
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

      <div className="mt-10 flex justify-between">
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

      <SegmentedProgressBar
        totalSteps={5}
        currentIndex={3}
      />
    </div>
  );
}
