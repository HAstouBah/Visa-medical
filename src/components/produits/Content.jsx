import React from "react";
import BottomElement from "./BottomElement";
import LeftElement from "../LeftElement";
import RightElement from "./RightElement";

const Content = () => {
  return (
    <>
      <div className="items-center w-full">
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
