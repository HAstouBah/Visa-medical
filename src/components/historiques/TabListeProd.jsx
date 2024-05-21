import React from "react";
const data = [
  {
    id: 1,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 2,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 3,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 4,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 5,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 6,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 7,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 8,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 9,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
  {
    id: 10,
    date: "",
    provenance: "",
    destination: "",
    entree: "",
    sortie: "",
    stock: "",
    peremption: "",
    observation: "",
  },
];

const TabListeProd = () => {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="table-auto w-full">
        <thead className="border">
          <tr>
            <th className="border px-4 py-3">Date</th>
            <th className="border px-4 py-3">Provénance</th>
            <th className="border px-4 py-3">Destination</th>
            <th className="border px-4 py-3">Entrées</th>
            <th className="border px-4 py-3">Sorties</th>
            <th className="border px-4 py-3">Stock</th>
            <th className="border px-4 py-3">Peremption</th>
            <th className="border px-4 py-3">Observation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((produit) => (
            <tr key={produit.id} className="text-center">
              <td className="border px-5 py-4">{produit.date}</td>
              <td className="border px-5 py-4">{produit.provenance}</td>
              <td className="border px-5 py-4">{produit.destination}</td>
              <td className="border px-5 py-4">{produit.entree}</td>
              <td className="border px-5 py-4">{produit.sortie}</td>
              <td className="border px-5 py-4">{produit.stock}</td>
              <td className="border px-5 py-4">{produit.peremption}</td>
              <td className="border px-5 py-4">{produit.observation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabListeProd;
