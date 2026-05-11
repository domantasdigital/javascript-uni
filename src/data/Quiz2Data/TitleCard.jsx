import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

const TitleCard = forwardRef(({ handleStart }, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center h-screen overflow-hidden"
    >
      <div className="bg-purple-300 h-[90vh] w-[88vw] rounded-3xl border-amber-50 border-2 overflow-hidden flex flex-col justify-center items-center ">
        <div className="max-w-[70vw]">
          <h1 className="text-3xl text-center mb-5">Klausimyno maratonas</h1>
        </div>
        <div className="max-w-[70vw] mb-10">
          <h2 className="text-center">
            Turėsite teisingai atsakyti į 20 TAIP/NE klausimų. Kiekvienam
            klausimui skiriamos 10 sekundžių. Neteisingai atsakius į klausimą
            žaidimas prasideda iš naujo. SĖKMĖS!
          </h2>
        </div>
        <Button className="w-[70vw]" onClick={handleStart}>
          Pradėti žaidimą!
        </Button>
      </div>
    </div>
  );
});

export default TitleCard;
