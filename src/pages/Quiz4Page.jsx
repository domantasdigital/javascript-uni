import { useState } from "react";
import { Button } from "@/components/ui/button";

const Quiz4Page = () => {
  const [pirmasInputValue, setPirmasInputValue] = useState("");
  const [antrasInputValue, setAntrasInputValue] = useState("");
  const [treciasInputValue, setTreciasInputValue] = useState("");
  const [uzduotisSuccess, setUzduotisSuccess] = useState(false);
  const [uzduotisFailed, setUzduotisFailed] = useState(false);

  const teisingasKodas = "6769420";

  const checkUzduotiesSuccess = () => {
    const combinedAnswers = [
      pirmasInputValue,
      antrasInputValue,
      treciasInputValue,
    ].join("");

    if (combinedAnswers === teisingasKodas) {
      setUzduotisSuccess(true);
    } else {
      setUzduotisFailed(true);
    }
  };

  const handleReset = () => {
    setUzduotisFailed(false);
  };

  return (
    <>
      {uzduotisSuccess && (
        <div className="flex items-center justify-center fixed inset-0 min-h-100 backdrop-blur-lg transition   ">
          <div className="mt-10 text-center flex flex-col items-center w-[90vw] bg-green-500 p-5 border-2 border-green-400 rounded-3xl justify-between">
            <h1 className="text-xl">Įveikėte pirmąjį kambarį! Sveikiname!</h1>
            <p className="mt-5">Parodykite šią žinutę vadovui/ei.</p>
          </div>
        </div>
      )}

      {uzduotisFailed && (
        <div className="flex items-center justify-center fixed inset-0 min-h-100 backdrop-blur-lg transition   ">
          <div className="mt-10 text-center flex flex-col items-center w-[90vw] bg-red-500 p-5 border-2 border-red-400 rounded-3xl justify-between">
            <h1 className="text-xl">Kodas/ai neteisingas/i, bandykite vėl.</h1>
            <Button onClick={handleReset} className="bg-red-700 mt-5">
              Grįžti į užduotį
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-center ">
        <div className="mt-10 text-center flex flex-col items-center w-[80vw]  bg-purple-100 p-5 border-2 border-purple-200 rounded-3xl justify-between">
          <h1 className="text-center text-3xl">Seifas</h1>
          <p className="mt-5">
            Atlikus visas šio kambario užduotis Jums beliko teisingai suvesti
            slaptuosius kodus, kad galėtumėte pereiti į kitą žingsnį.
          </p>
          <input
            className="mt-8 border-2 border-green-500 p-2 rounded-3xl"
            value={pirmasInputValue}
            onChange={(e) => setPirmasInputValue(e.target.value)}
            placeholder="Kodas..."
          ></input>
          <input
            className="mt-8  border-2 border-purple-500 p-2 rounded-3xl"
            value={antrasInputValue}
            onChange={(e) => setAntrasInputValue(e.target.value)}
            placeholder="Kodas..."
          ></input>
          <input
            className="mt-8 border-2 border-yellow-400 p-2 rounded-3xl"
            value={treciasInputValue}
            onChange={(e) => setTreciasInputValue(e.target.value)}
            placeholder="Kodas..."
          ></input>
          <Button
            onClick={checkUzduotiesSuccess}
            className="mt-10 text-md bg-green-700 p-5 rounded-3xl border-2 border-white"
          >
            Atrakinti naują kambarį
          </Button>
        </div>
      </div>
    </>
  );
};

export default Quiz4Page;
