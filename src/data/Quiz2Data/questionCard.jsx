import questions from "./quiz2data.js";
import { forwardRef } from "react";

const questionCard = forwardRef(
  ({ currentQuestion, timeLeft, handleAnswer }, ref) => {
    return (
      <div
        ref={ref}
        className="flex h-screen w-screen items-center justify-center"
      >
        <div className="bg-purple-100 h-[90vh] w-[85vw] border-2 border-purple-400 rounded-3xl overflow-hidden flex flex-col items-center justify-between">
          <div className="w-full h-[10vh] bg-amber-50 flex items-center justify-center ">
            <h1 className="text-center text-3xl text-purple-100">
              {questions[currentQuestion].number} Klausimas
            </h1>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <h1 className="text-xl px-5">
              {questions[currentQuestion].question}
            </h1>
            <h2 className="mt-5">liko {timeLeft} sekundės/ių</h2>
          </div>

          <div className="flex w-full h-30 gap-2 mb-5 px-5">
            <div
              className=" bg-red-500 w-full rounded-2xl border-2 border-amber-50 flex justify-center items-center cursor-pointer"
              onClick={() => handleAnswer(false)}
            >
              <h1>NE</h1>
            </div>
            <div
              className=" bg-green-500 w-full rounded-2xl border-2 border-amber-50 flex justify-center items-center cursor-pointer"
              onClick={() => handleAnswer(true)}
            >
              <h1>TAIP</h1>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default questionCard;
