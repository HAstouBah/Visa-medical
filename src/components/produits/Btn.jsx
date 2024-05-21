import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import AddProductForm from "./AddProductForm";

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-primary grid w-1/2 mx-auto py-5 rounded-xl mt-7 shadow items-center">
      <button
        onClick={openModal}
        className="flex items-center text-xl font-bold text-white text-center gap-3 mx-auto"
      >
        <HiPlus className="text-5xl" />
        AJOUTER UN NOUVEAU PRODUIT
      </button>
      <AddProductForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Btn;
