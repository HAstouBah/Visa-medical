import React from "react";
import Tableau from "./Tableau";
import TabHist from "./TabHist";
const data = [
  {
    id: 1,
    date: "2024-05-15",
    entree: "55",
    stock: 100,
    destination: "destination 1",
    peremption: "2024-12-31",
  },
  {
    id: 2,
    date: "2024-05-10",
    entree: "55",
    stock: 100,
    destination: "destination 1",
    peremption: "2024-11-30",
  },
  {
    id: 3,
    date: "2024-05-10",
    entree: "55",
    stock: 100,
    destination: "destination 1",
    peremption: "2024-10-31",
  },
  {
    id: 4,
    date: "2024-05-10",
    entree: "55",
    stock: 100,
    destination: "destination 1",
    peremption: "2024-10-31",
  },
  {
    id: 5,
    date: "2024-05-10",
    entree: "55",
    stock: 100,
    destination: "destination 1",
    peremption: "2024-10-31",
  },
  {
    id: 6,
    date: "2024-05-10",
    entree: "55",
    stock: 100,
    destination: "destination 1",
    peremption: "2024-10-31",
  },
];

const BottomElement = () => {
  return (
    <div className="w-full mx-auto mt-14 pb-10">
      <div className="mb-3">
        <h1 className="text-2xl pl-5">Historiques des entrées/sorties</h1>
      </div>
      <div className="bg-white py-8 rounded-2xl shadow">
        <TabHist data={data} />
        <Tableau data={data} />
      </div>
    </div>
  );
};

export default BottomElement;
