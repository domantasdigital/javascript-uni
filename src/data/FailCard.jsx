import { Button } from "@/components/ui/button";

const FailCard = ({ tryingAgain }) => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-red-600 h-[90vh] w-[88vw] rounded-3xl border-amber-50 border-2 overflow-hidden flex flex-col justify-center items-center ">
        <div className="max-w-[70vw]">
          <h1 className="text-3xl text-center mb-5">Užduotis neįveikta</h1>
        </div>
        <div className="max-w-[70vw] mb-10">
          <h2 className="text-center">
            Versle tokio dalyko kaip nesėkmė nėra, jei kiekvieną klaidą
            priimsite kaip pamoką! Galvojat didžiausi entrepreneriai nedarė
            klaidų?
          </h2>
        </div>
        <Button
          className="w-[70vw] bg-green-600 border-2 border-white"
          onClick={() => tryingAgain()}
        >
          Einam iš naujo!
        </Button>
      </div>
    </div>
  );
};

export default FailCard;
