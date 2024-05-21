import React from "react";
import Btn from "./Btn";

const RightElement = () => {
  return (
    <div className="w-full mt-7">
      <div className="flex gap-3 ml-5 mr-5">
        <div className="grid gap-2 bg-white w-8/12 py-3 text-lg text-center rounded-xl shadow-sm">
          <span className="font-bold">200</span>
          <span>Stock</span>
        </div>
        <div className="grid gap-2 bg-white w-8/12 py-3 text-lg text-center rounded-xl shadow-sm">
          <span className="font-bold">Gouv.</span>
          <span>Provenance</span>
        </div>
        <div className="grid gap-2 bg-white w-8/12 py-3 text-lg text-center rounded-xl shadow-sm">
          <span className="font-bold">Chirurgie</span>
          <span>Destination</span>
        </div>
        <div className="grid gap-2 bg-white w-8/12 py-3 text-lg text-center rounded-xl shadow-sm">
          <span className="font-bold">Mini Santé</span>
          <span>Structure</span>
        </div>
        <div className="grid gap-2 bg-white w-8/12 py-3 text-lg text-center rounded-xl shadow-sm">
          <span className="font-bold">02/2/2024</span>
          <span>Date réçu</span>
        </div>
      </div>
      <Btn />
    </div>
  );
};

export default RightElement;
