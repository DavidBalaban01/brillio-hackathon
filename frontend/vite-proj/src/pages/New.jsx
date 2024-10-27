import Container from "../ui/Container";
import Survey from "../ui/Survey";
import {
  generateYesNoQuestions,
  generateSummary,
  callPredictAPI,
  generateCondition,
} from "../services/apiGPT";
import { useState } from "react";
import Prompt from "./Prompt";
import Question from "./question";
import FinalLoad from "./FinalLoad";
import FinalLoad2 from "./FinalLoad2";
import ModelViewer from "./ModelViewer";
import Recommend from "./Recommend";

export default function New() {
  const [inputText, setInputText] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [finalSurvey, setFinalSurvey] = useState();
  const [result, setResult] = useState();

  // callPredictAPI("Ankle sprain (disorder)");

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
    // if(currentIndex)
    answers[currentIndex - 1] = answer;
    if (currentIndex == questions.length) {
      console.log("finished");
      setFinalSurvey(
        questions
          .map((item, index) => item + " " + answers[index] + ";")
          .join("\n"),
      );

      setFinished(true);
    }
    setCurrentIndex(currentIndex + 1);
  }

  function handleBackClick() {
    answers[currentIndex - 1] = "";
    setCurrentIndex(currentIndex - 1);
  }

  console.log("answers", answers);

  if (finished) {
    console.log("finalSurvey", finalSurvey);
    console.log("inputText", inputText);

    async function executeFunctions() {
      try {
        const resultA = await generateSummary(inputText, finalSurvey); // Call functionA
        const resultB = await generateCondition(resultA); // Pass result to functionB
        const resultC = await callPredictAPI(resultB); // Pass result to functionC

        console.log("RESULT", resultC); // Final result
        setFinished(false);
        setResult(resultC[0]);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }

    // Execute the functions
    executeFunctions();
  }

  return (
    <Container>
      {currentIndex == 0 && !loading && (
        <Prompt onClick={handleNextClick} onChange={setInputText} />
      )}

      {loading && <FinalLoad />}
      {currentIndex > 0 &&
        currentIndex <= questions.length &&
        !finished &&
        !result && (
          <Question
            currentIndex={currentIndex}
            nextClick={handleNextClick}
            backClick={handleBackClick}
            question={questions[currentIndex - 1]}
            answers={answers}
          />
        )}
      {finished && !result && <FinalLoad2 />}
      {result && <Recommend doctor={result} />}
    </Container>
  );
}
