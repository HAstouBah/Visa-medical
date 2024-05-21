import React from "react";
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
    id: 3,
    name: "Produit D",
    structure: "Structure D",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
  {
    id: 3,
    name: "Produit E",
    structure: "Structure E",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
  {
    id: 3,
    name: "Produit F",
    structure: "Structure F",
    stock: 75,
    date: "2024-05-20",
    peremption: "2024-10-31",
  },
];

const TabListeProd = () => {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="table-auto w-full">
        <thead className="bg-tertiary">
          <tr className="border-b border-gray-300">
            <th className="px-4 py-3">Produit</th>
            <th className="px-4 py-3">Structure</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Date réçu</th>
            <th className="px-4 py-3">Peremption</th>
          </tr>
        </thead>
        <tbody>
          {data.map((produit) => (
            <tr
              key={produit.id}
              className="text-center border-b border-gray-300"
            >
              <td className="font-bold px-4 py-3">{produit.name}</td>
              <td className=" px-4 py-3">{produit.structure}</td>
              <td className=" px-4 py-3">{produit.stock}</td>
              <td className=" px-4 py-3">{produit.date}</td>
              <td className=" px-4 py-3">{produit.peremption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabListeProd;
