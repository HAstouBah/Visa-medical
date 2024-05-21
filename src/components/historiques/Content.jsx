import React from "react";
import LeftElement from "../LeftElement";
import BottomElement from "./BottomElement";
import RightElement from "./RightElement";

const Content = () => {
  return (
    <>
      <div className="flex items-center w-full">
        {/* <LeftElement /> */}
        <RightElement />
      </div>
      <div className="w-full">
        <BottomElement />
      </div>
    </>
  );
};

export default Content;
