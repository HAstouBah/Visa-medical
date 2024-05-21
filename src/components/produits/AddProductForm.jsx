import React, { useState } from "react";
import Proptypes from "prop-types";
import { IoClose } from "react-icons/io5";

const AddProductForm = ({ isOpen, onClose }) => {
  const [date, setDate] = useState("");
  const [productName, setProductName] = useState("");
  const [structure, setStructure] = useState("");
  const [stock, setStock] = useState("");
  const [provenance, setProvenance] = useState("");
  const [destination, setDestination] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [observation, setObservation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour ajouter un produit
    onClose(); // Fermer la pop-up après l'ajout
  };

  return isOpen ? (
    <div className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-full rounded-lg mx-40 h-auto">
        <div className="flex items-center justify-between pt-5 px-5 border-b-2 border-secondary">
          <h2 className="text-xl font-bold mb-4 text-gray-500 ">
            AJOUTER UN PRODUIT
          </h2>
          <IoClose
            className="text-3xl text-gray-500 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5 py-10 px-10"
        >
          <input
            type="date"
            id="expirationDate"
            placeholder="Date"
            value={date}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            id="productName"
            placeholder="Nom de produit"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            id="structure"
            placeholder="Structure"
            value={structure}
            onChange={(e) => setStructure(e.target.value)}
            className=" bg-tertiary rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            id="stock"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            id="provenance"
            placeholder="Provenance"
            value={provenance}
            onChange={(e) => setProvenance(e.target.value)}
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
            type="date"
            id="expirationDate"
            placeholder="Péremption"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <input
            id="observation"
            placeholder="Observation"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            className="bg-tertiary rounded px-3 py-2 w-full"
          />
          <div className="flex items-center gap-5 justify-center col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="py-1 px-20 text-primary border-2 border-primary rounded-xl"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-primary border-2 border-primary text-white px-20 py-1 rounded-xl"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

AddProductForm.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
};

export default AddProductForm;
