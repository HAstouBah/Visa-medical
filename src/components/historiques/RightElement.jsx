import React from "react";
import Btn from "./Btn";

const RightElement = () => {
  return (
    <div className="w-full mt-7">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <div className="grid w-full  md:w-[150px] bg-white py-3 text-lg text-center rounded-xl shadow-sm mb-4">
          <span className="font-bold">200</span>
          <span>Stock</span>
        </div>
        <div className="grid w-full  md:w-[150px] bg-white py-3 text-lg text-center rounded-xl shadow-sm mb-4">
          <span className="font-bold">Gouv.</span>
          <span>Provenance</span>
        </div>
        <div className="grid w-full  md:w-[150px] bg-white py-3 text-lg text-center rounded-xl shadow-sm mb-4">
          <span className="font-bold">Chirurgie</span>
          <span>Destination</span>
        </div>
        <div className="grid w-full  md:w-[150px] bg-white py-3 text-lg text-center rounded-xl shadow-sm mb-4">
          <span className="font-bold">Mini Santé</span>
          <span>Structure</span>
        </div>
        <div className="grid w-full  md:w-[150px] bg-white py-3 text-lg text-center rounded-xl shadow-sm mb-4">
          <span className="font-bold">02/2/2024</span>
          <span>Date réçu</span>
        </div>
      </div>
      <Btn />
    </div>
  );
};

export default RightElement;
