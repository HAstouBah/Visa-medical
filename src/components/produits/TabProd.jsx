import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Search from "../Search";
import { FaPrint } from "react-icons/fa";
import ListeProduits from "./ListeProduits";

const TabProd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between px-5">
      <div>
        <span className="text-xl">Total :</span>
        <span className="font-bold"> 220</span>
      </div>
      <div className="flex items-center justify-between w-4/5">
        <div className="flex items-center gap-2 w-28 font-bold border rounded text-gray-600 px-2 py-1">
          <CiFilter className="text-3xl" />
          <span className="text-sm"> Filtrer</span>
        </div>
        <Search />
        <button
          className="flex items-center gap-2 w-40 font-bold px-5 py-2 border border-primary rounded-md text-primary"
          onClick={openModal}
        >
          <FaPrint className="text-2xl" />
          Imprimer
        </button>
      </div>
      <ListeProduits isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TabProd;
