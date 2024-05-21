import React, { useEffect, useState } from "react";
import Tableau from "./Tableau";
import TabProd from "./TabProd";

// Exemple de données paginées
const data = [
  {
    id: 1,
    name: "Produit A",
    structure: "Structure 1",
    stock: 100,
    date: "2024-05-15",
    peremption: "2024-12-31",
  },
  {
    id: 2,
    name: "Produit B",
    structure: "Structure 2",
    stock: 50,
    date: "2024-05-10",
    peremption: "2024-11-30",
  },
  {
    id: 3,
    name: "Produit C",
    structure: "Structure 1",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
  {
    id: 4,
    name: "Produit D",
    structure: "Structure D",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
  {
    id: 5,
    name: "Produit E",
    structure: "Structure E",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
  {
    id: 6,
    name: "Produit F",
    structure: "Structure F",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
  // Ajoutez d'autres produits selon vos besoins
];

const BottomElement = () => {
  return (
    <div className="mt-14 pb-10 ">
      <div className="mb-3">
        <h1 className="text-2xl ">Listes des produits</h1>
      </div>
      <div className="bg-white py-8 rounded-2xl shadow">
        <TabProd data={data} />
        <Tableau data={data} />
      </div>
    </div>
  );
};

export default BottomElement;
