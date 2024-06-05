import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Tableau = ({ data }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage))
    );
  };

  return (
    <div className="overflow-x-auto mt-8">
      <table className="table-auto w-full">
        <thead className="bg-tertiary">
          <tr className="border border-gray-300">
            <th className=" px-4 py-3">Produit</th>
            <th className="px-4 py-3">Structure</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Date réçu</th>
            <th className="px-4 py-3">Peremption</th>
            <th className="pr-28 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((produit) => (
            <tr key={produit.id} className="text-center border border-gray-300">
              <td className=" px-4 py-3">{produit.name}</td>
              <td className=" px-4 py-3">{produit.structure}</td>
              <td className=" px-4 py-3">{produit.stock}</td>
              <td className=" px-4 py-3">{produit.date}</td>
              <td className=" px-4 py-3">{produit.peremption}</td>
              <td className="flex items-start gap-5 pl-16 py-3">
                <button className="text-sm bg-primary text-white py-1 px-3 rounded-2xl shadow-sm">
                  Détails
                </button>
                <span className="text-xl text-primary">
                  <MdEdit />
                </span>
                <span className="text-xl text-red-500">
                  <MdDeleteForever />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="">
          <span className="text-xs font-semibold">Page&nbsp;</span>{" "}
          <strong>{currentPage}&nbsp;</strong>
          <span className="text-xs font-semibold">à</span>
          <strong>&nbsp;{totalPages}&nbsp;</strong>
          <span className="text-xs font-semibold">dans</span>
          <strong>&nbsp;{data.length}&nbsp;</strong>
          <span className="text-xs font-semibold">lignes</span>
        </div>

        <div className="flex gap-3">
          <button
            className="text-primary px-4 py-1 rounded-lg bg-white hover:bg-primary hover:text-white
            border border-primary"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <button
            className="text-primary px-4 py-1 rounded-lg bg-white hover:bg-primary hover:text-white
            border border-primary"
            onClick={handleNextPage}
            disabled={endIndex >= data.length}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};
Tableau.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Tableau;
