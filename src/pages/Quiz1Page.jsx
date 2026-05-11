import questions from "../data/quiz1data.js";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Quiz1Page = () => {
  const [userAnswer, setUserAnswer] = useState({});
  const [popupCorrect, setPopupCorrect] = useState(null);
  const [popupInCorrect, setPopupInCorrect] = useState({
    isIncorrect: false,
    correctScore: 0,
  });
  const handleSubmit = () => {
    const correctCount = questions.filter(
      (q) => userAnswer[q.id] === q.answer,
    ).length;

    const allCorrect = correctCount === questions.length ? true : false;

    if (allCorrect) {
      setPopupCorrect(true);
    } else {
      setPopupInCorrect({ isIncorrect: true, correctScore: correctCount });
    }
  };

  return (
    <>
      {popupCorrect && (
        <div className=" flex inset-0 fixed items-center justify-center ">
          <div className="h-[70vh] w-[95vw] bg-green-500 rounded-3xl border-4 border-amber-50 flex justify-center items-center">
            <div className="flex flex-col">
              <h1>Atsakėte teisingai!</h1>
              <h1>Slaptasis kodas: 67</h1>
              <Button
                className="text-center mt-5 text-lg p-5 "
                variant="default"
                onClick={() => setPopupCorrect(false)}
              >
                Uždaryti
              </Button>
            </div>
          </div>
        </div>
      )}

      {popupInCorrect.isIncorrect && (
        <div className=" flex inset-0 fixed items-center justify-center ">
          <div className="h-[70vh] w-[95vw] bg-red-500 rounded-3xl border-4 border-amber-50 flex justify-center items-center">
            <div className="flex flex-col items-center">
              <h1>Deja, neteisingai</h1>
              <h1 className="text-2xl">
                Teisingai atsakėte į {popupInCorrect.correctScore} klausimą(us)
              </h1>
              <Button
                className="text-center mt-5 text-lg py-5 px-25 "
                variant="default"
                onClick={() =>
                  setPopupInCorrect({
                    isIncorrect: false,
                    correctScore: 0,
                  })
                }
              >
                Uždaryti
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-y-5">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-purple-100 w-[90vw] rounded-md border-2 border-purple-200"
            >
              <div className="bg-amber-50 h-20 flex items-center justify-center">
                <h1 className="text-center text-purple-100 ">
                  {question.name}
                </h1>
              </div>

              <img
                src={question.image}
                className="w-[80%] mt-8 mb-8 mx-auto aspect-square object-cover rounded-2xl"
              />
              <div className="px-4 pb-4">
                <label htmlFor={question.id} className="font-semibold">
                  Ką pasiekė ši moteris?
                </label>
                <select
                  id={question.id}
                  className="bg-purple-300 text-white w-full rounded-md p-2 "
                  onChange={(e) =>
                    setUserAnswer((prev) => ({
                      ...prev,
                      [question.id]: e.target.value,
                    }))
                  }
                >
                  <option value=""></option>
                  {question.options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <Button
          className="w-[80vw] h-15 mt-10 mb-10 font-semibold text-lg"
          variant="default"
          onClick={handleSubmit}
        >
          Pateikti
        </Button>
      </div>
    </>
  );
};

export default Quiz1Page;
