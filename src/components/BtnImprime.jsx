import React from "react";

import { FaPrint } from "react-icons/fa";
const BtnImprime = () => {
  return (
    <div className="flex justify-end pr-10">
      <button className="flex items-center gap-2 w-40 font-bold px-5 py-2 border bg-primary border-primary rounded-md text-white mt-28 mb-10">
        <FaPrint className="text-2xl " />
        Imprimer
      </button>
    </div>
  );
};

export default BtnImprime;
