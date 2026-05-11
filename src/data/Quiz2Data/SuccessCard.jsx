const SuccessCard = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-green-500 h-[90vh] w-[88vw] rounded-3xl border-amber-50 border-2 overflow-hidden flex flex-col justify-center items-center ">
        <div className="max-w-[70vw]">
          <h1 className="text-3xl text-center mb-5">UŽDUOTIS ĮVEIKTA!</h1>
        </div>
        <div className="max-w-[70vw] mb-10">
          <h2 className="text-center text-3xl">Jūsų slaptasis kodas: 420</h2>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
