import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import EnterProductForm from "./EnterProductForm";
import ExitProductForm from "./ExitProductForm";

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  return (
    <div className="w-[500px] mx-auto flex items-center justify-center gap-8">
      <button
        className="flex items-center gap-2 bg-primary w-44 px-4  py-3 rounded-xl mt-7 shadow text-white font-bold"
        onClick={openModal}
      >
        <IoMdExit className=" text-2xl" />
        <span>ENTREE</span>
      </button>
      <EnterProductForm isOpen={isModalOpen} onClose={closeModal} />
      <button
        className="flex items-cente justify-betweenr gap-2 bg-white  w-44 px-4  py-3 rounded-xl mt-7 shadow text-primary font-bold"
        onClick={openModal2}
      >
        <IoMdExit className=" text-2xl" />
        <span>SORTIE</span>
      </button>
      <ExitProductForm isOpen={isModalOpen2} onClose={closeModal2} />
    </div>
  );
};

export default Btn;
