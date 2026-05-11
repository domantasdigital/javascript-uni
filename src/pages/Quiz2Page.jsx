import questions from "../data/Quiz2Data/quiz2data.js";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import TitleCard from "../data/Quiz2Data/TitleCard.jsx";
import QuestionCard from "../data/Quiz2Data/questionCard.jsx";
import SuccessCard from "../data/Quiz2Data/SuccessCard.jsx";
import FailCard from "../data/FailCard.jsx";

const Quiz2Page = () => {
  const [gameState, setGameState] = useState("title");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const titleCardRef = useRef();
  const handleStart = () => {
    gsap.to(titleCardRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      onComplete: () => setGameState("questions"),
    });
  };

  const tryingAgain = () => {
    setGameState("title");
    setCurrentQuestion(0);
  };

  // Checkinam answers --------------------------------
  const handleAnswer = (userAnswer) => {
    if (userAnswer !== questions[currentQuestion].answer) {
      // wrong answer
      setGameState("fail");
    } else if (currentQuestion === questions.length - 1) {
      // correct and it was the last question
      setGameState("success");
    } else {
      // correct, go to next question
      gsap.to(questionCardRef.current, {
        x: -500,
        opacity: 0,
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          setCurrentQuestion((prev) => prev + 1);
        },
      });
    }
  };

  // Animating cards --------------------------------
  const questionCardRef = useRef();
  useEffect(() => {
    if (gameState !== "questions") return;

    gsap.fromTo(
      questionCardRef.current,
      { x: 500, opacity: 0 }, // start position
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, // end position
    );
  }, [currentQuestion, gameState]);

  // Timer --------------------------------
  useEffect(() => {
    if (gameState !== "questions") return;

    setTimeLeft(10); // reset to 8 on every new question

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameState("fail");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup when question changes
  }, [currentQuestion, gameState]);

  return (
    <>
      {/* Title card */}
      {gameState === "title" && (
        <TitleCard handleStart={handleStart} ref={titleCardRef} />
      )}
      {/* Question Card */}
      {gameState === "questions" && (
        <QuestionCard
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
          timeLeft={timeLeft}
          ref={questionCardRef}
        />
      )}
      {/* Success card */}
      {gameState === "success" && <SuccessCard />}
      {/* Fail Card */}
      {gameState === "fail" && <FailCard tryingAgain={tryingAgain} />}
    </>
  );
};

export default Quiz2Page;
