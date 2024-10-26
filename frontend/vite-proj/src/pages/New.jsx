import Container from "../ui/Container";
import Survey from "../ui/Survey";
import { generateYesNoQuestions } from "../services/apiGPT";
import { useState } from "react";
import Prompt from "./Prompt";
import Question from "./question";
import FinalLoad from "./FinalLoad";

// const questionData = [
//   "Does the pain worsen with activity or movement?",
//   "Is there any swelling or bruising around the ankle?",
//   "Have you recently experienced any injury or trauma to the ankle?",
//   "Do you have any history of ankle sprains or fractures?",
//   "Does the pain occur at rest or only during certain activities?",
//   "Have you noticed any stiffness or limited range of motion in the ankle?",
//   "Is the pain localized to one specific area of the ankle?",
//   "Do you have any numbness or tingling in the foot or ankle?",
//   "Have you experienced pain in other joints or areas of the body?",
//   "Are you currently taking any medications or have any underlying health conditions?",
// ];

// let answers = questionData.map((item, index) => "");

export default function New() {
  const [inputText, setInputText] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGenerateQuestions = async (onComplete) => {
    setLoading(true);
    try {
      const generatedQuestions = await generateYesNoQuestions(inputText);
      setQuestions(generatedQuestions);
      setAnswers(generatedQuestions.map((item, index) => ""));
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setLoading(false);
    }
  };

  function handleNextClick(answer) {
    if (currentIndex == 0) {
      handleGenerateQuestions(() => {
        setCurrentIndex(currentIndex + 1);
      });
      return;
    }
    answers[currentIndex] = answer;
    setCurrentIndex(currentIndex + 1);
  }

  function handleBackClick() {
    answers[currentIndex - 1] = "";
    setCurrentIndex(currentIndex - 1);
  }

  console.log("answers", answers);
  console.log("currentIndex", currentIndex);
  console.log("questions.length", questions.length);

  return (
    <Container>
      {currentIndex == 0 && !loading && (
        <Prompt onClick={handleNextClick} onChange={setInputText} />
      )}
      {loading && <FinalLoad />}
      {currentIndex > 0 && currentIndex < questions.length && (
        <Question
          currentIndex={currentIndex}
          nextClick={handleNextClick}
          backClick={handleBackClick}
          question={questions[currentIndex]}
          answers={answers}
        />
      )}
      {currentIndex > questions.length && <div>Final</div>}
    </Container>

    // <Container>
    //   {/* <header className="mb-6">
    //     <h1 className="font-title mb-2 text-2xl text-neutral-950">
    //       Title Goes Here
    //     </h1>
    //     <p className="text-lg text-neutral-700">
    //       This is the subtitle explaining the content.
    //     </p>
    //   </header>
    //   <div className="grid grid-cols-2 gap-8">
    //     <div className="flex flex-col justify-start">
    //       <textarea
    //         rows="3"
    //         placeholder="Enter your text..."
    //         className="mb-4 rounded-xl border border-neutral-300 p-2 text-neutral-950"
    //         onChange={(e) => setInputText(e.target.value)}
    //       />
    //       <button
    //         className="btn btn-primary"
    //         disabled={loading}
    //         onClick={handleGenerateQuestions}
    //       >
    //         {loading ? "Loading..." : "Submit"}
    //       </button>
    //     </div>

    //     <Survey questions={questionData} />
    //     {/* <Survey questions={questions} /> */}
    //   {/* </div> */}

    //   {currentIndex == 0 && <Prompt onClick={handleNextClick} />}
    //   {currentIndex > 0 && (
    //     <Question
    //       currentIndex={currentIndex}
    //       nextClick={handleNextClick}
    //       backClick={handleBackClick}
    //       question={questionData[currentIndex]}
    //     />
    //   )}
    //   {/* {currentIndex == questionData.length+1 && ()} */}
    // </Container>
  );
}
