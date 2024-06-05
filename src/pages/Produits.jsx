import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/produits/Content";
import RightElement from "../components/produits/RightElement";
import BottomElement from "../components/produits/BottomElement";

export default function Produits() {
  return (
    <div className="main">
      <RightElement />
      <BottomElement />
    </div>
  );
}
