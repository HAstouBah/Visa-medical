import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { prototype } from "postcss/lib/previous-map";

const EnterProductForm = ({ isOpen, onClose }) => {
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [entree, setEntree] = useState("");
  const [observation, setObservation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour ajouter un produit
    onClose(); // Fermer la pop-up après l'ajout
  };

  return isOpen ? (
    <div className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 rounded-lg mx-40 h-auto">
        <div className="flex items-center justify-between pt-5 px-5 border-b-2 border-secondary">
          <h2 className="text-xl font-bold mb-4 text-gray-500">
            ENTREE DE PRODUIT
          </h2>
          <IoClose
            className="text-3xl text-gray-500 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 py-10 px-10"
        >
          <input
            type="date"
            id="expirationDate"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            id="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            id="entree"
            placeholder="Entrée"
            value={destination}
            onChange={(e) => setEntree(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <textarea
            id="observation"
            placeholder="Observation"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <div className="flex items-center gap-5 justify-center">
            <button
              type="button"
              onClick={onClose}
              className="py-1 px-20 text-primary border-2 border-primary rounded-xl w-full"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-primary border-2 border-primary text-white px-20 py-1 rounded-xl w-full"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

EnterProductForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EnterProductForm;
