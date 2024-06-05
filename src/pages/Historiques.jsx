import React from "react";
import Content from "../components/historiques/Content";
import Navbar from "../components/Navbar";
import RightElement from "../components/historiques/RightElement";
import BottomElement from "../components/historiques/BottomElement";

export default function Historiques() {
  return (
    <div className="main">
      <RightElement />
      <BottomElement />
    </div>
  );
}
