import Container from "../ui/Container";
import Survey from "../ui/Survey";
import { generateYesNoQuestions } from "../services/apiGPT";
import { useState } from "react";
import Prompt from "./Prompt";
import Question from "./question";

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

  return (
    <Container>
      {currentIndex == 0 && (
        <Prompt onClick={handleNextClick} onChange={setInputText} />
      )}
      {/* {loading && <div>SPINNER</div>} */}
      {currentIndex > 0 && (
        <Question
          currentIndex={currentIndex}
          nextClick={handleNextClick}
          backClick={handleBackClick}
          question={questions[currentIndex]}
          answers={answers}
        />
      )}
      {/* {currentIndex == questionData.length+1 && ()} */}
    </Container>
  );
}
