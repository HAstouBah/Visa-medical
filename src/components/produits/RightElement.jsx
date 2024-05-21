import React from "react";
import Btn from "./Btn";

const RightElement = () => {
  return (
    <div className="mt-7">
      <div className="grid bg-white w-1/3 mx-auto py-5 rounded-lg shadow-sm">
        <span className="text-xl font-bold text-center">200</span>
        <span className="text-xl text-center">
          Total des produits en stocks
        </span>
      </div>
      <Btn />
    </div>
  );
};

export default RightElement;
