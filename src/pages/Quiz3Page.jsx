import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Quiz3Page = () => {
  const vadovoKodas = "1234";
  const [vadovoPslAtidarytas, setvadovoPslAtidarytas] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [uzduotisSuccess, setUzduotisSuccess] = useState(false);
  const [uzduotisFailed, setUzduotisFailed] = useState(false);

  const VadovoPslRef = useRef();

  const handleVadovoPslOpen = () => {
    setvadovoPslAtidarytas(true);
  };
  useEffect(() => {
    if (!vadovoPslAtidarytas) return;
    gsap.fromTo(
      VadovoPslRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
    );
  }, [vadovoPslAtidarytas]);
  const handleVadovoPslClose = () => {
    setvadovoPslAtidarytas(false);
  };

  const checkUzduotiesSuccess = () => {
    if (inputValue === vadovoKodas) {
      setUzduotisSuccess(true);
      setvadovoPslAtidarytas(false);
      console.log(inputValue);
    } else {
      setUzduotisFailed(true);
      setvadovoPslAtidarytas(false);
      console.log(inputValue);
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
            <h1 className="text-xl">
              Užduotis įvykdyta! Jūsų slaptasis kodas yra: 420
            </h1>
          </div>
        </div>
      )}
      {uzduotisFailed && (
        <div className="flex items-center justify-center fixed inset-0 min-h-100 backdrop-blur-lg transition   ">
          <div className="mt-10 text-center flex flex-col items-center w-[90vw] bg-red-500 p-5 border-2 border-red-400 rounded-3xl justify-between">
            <h1 className="text-xl">
              Kodas neteisingas, patikrinkite ar vadovas/ė patvirtino užduoties
              atlikimą.
            </h1>
            <Button onClick={handleReset} className="bg-red-700 mt-5">
              Grįžti į užduotį
            </Button>
          </div>
        </div>
      )}

      {vadovoPslAtidarytas && (
        <div
          ref={VadovoPslRef}
          className="flex items-center justify-center fixed inset-0 min-h-100 backdrop-blur-lg transition opacity-0 "
        >
          {" "}
          <div className="mt-10 text-center flex flex-col items-center w-[90vw] bg-purple-300 p-5 border-2 border-purple-200 rounded-3xl justify-between">
            <h1 className="text-xl">
              Kad atrakinti jums reikalingą slaptąjį kodą, suveskite vadovo/ės
              duotą kodą, kad patvirtinti, jog užduotis buvo atlikta sėkmingai
            </h1>
            <input
              className="mt-5 border-2 p-5 rounded-3xl"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Kodas..."
            ></input>
            <Button onClick={checkUzduotiesSuccess} className="mt-5">
              Patikrinti kodą
            </Button>
            <Button
              onClick={handleVadovoPslClose}
              className="mt-5 bg-transparent"
            >
              Grįžti atgal
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="mt-10 text-center flex flex-col items-center w-[80vw] bg-purple-100 p-5 border-2 border-purple-200 rounded-3xl justify-between">
          <h1 className="text-center text-3xl">Informacija užduočiai</h1>
          <p className="mt-10">
            Atlikę užduotį parodykite ją vadovui/ei. Jei užduotį atlikote
            sėkmingai, jums bus suteiktas kodas, kad atrakintumėte tikrąjį
            slaptąjį užduoties seifo kodą.
          </p>
          <Button className="mt-5" onClick={handleVadovoPslOpen}>
            Suvesti vadovo/ės kodą
          </Button>
          <h1 className="text-center text-3xl mt-10">Empatijos žemėlapis</h1>
          <p className="mt-10">
            Norint sukurti sprendimą, kuris tikrai veiktų ilgalaikėje
            perspektyvoje, idealu sukurti empatijos žemėlapį. Empatijos
            žemėlapis – tai supaprastinta turimos informacijos apie konkrečius
            vartotojus vizualizacija.
          </p>
          <p className="mt-10">
            Empatijos žemėlapiai padeda atlikti tyrimus apie vartotoją ir
            sukurti bendrą supratimą siekiant priimti sprendimus ir atskleisti
            neišsakytus poreikius bei įžvalgas. Tai įrankis, padedantis užmegzti
            ryšį su vartotoju ir tinkamai su juo bendrauti.
          </p>
          <p className="mt-10">
            Tarp empatijos ir užuojautos yra plona riba. Empatija – jausti ir
            dalintis kažkieno patirtimi, jausmais ir požiūriais. Užuojauta – tai
            sielvartas, gailėjimasis ir rūpestis dėl kitų žmonių bėdų.
          </p>
          <p className="mt-10">
            Empatijos žemėlapio formatai skiriasi, tačiau visi jie turi bendrų
            pagrindinių elementų ir tikslų. Empatijos žemėlapis yra didelis
            popieriaus lapas arba lenta, padalinta į skirtingas dalis, kurių
            centre yra vartotojas.
          </p>
          <p className="mt-10">
            Empatijos žemėlapis yra padalintas į 7 dalis, nagrinėjančias
            skirtingus klausimus, tačiau kiekviena iš jų yra susijusi su kita:
            1. Į kokį vartotoją bandome įsijausti? 2. Kokius sprendimus
            vartotojai priima? 3. Ką mato vartotojai? 4. Apie ką vartotojai
            kalba? 5. Ką vartotojai veikia ir koks jų gyvenimo būdas? 6. Ką
            vartotojai dažniausiai girdi? 7. Ką vartotojai galvoja ar jaučia?
          </p>
          <h2 className="mt-10">
            <b>
              Nagrinėjant duotą iššūkį pabandykite užpildyti empatijos žemėlapį.
              Jums bus suteikta popierinė žemėlapio versija.
            </b>
          </h2>
          <img src="./assets/EmpatijosPic.png" className="mt-5" />
        </div>
      </div>
    </>
  );
};

export default Quiz3Page;
