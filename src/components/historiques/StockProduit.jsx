import React from "react";
import { IoClose } from "react-icons/io5";
import TabListeProd from "./TabListeProd";
import BtnImprime from "../BtnImprime";
import PropTypes from "prop-types";

const StockProduit = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-[900px] h-[600px] overflow-y-auto rounded-lg px-8 py-4">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm font-semibold py-3">
              MINISTERE DE LA SANTE <br />
              DIRECTION NATIONALE DES ETABLISSEMENTS HOSPITALIERS ET HYGIENE
              SANITAIRE <br />
              HOPITAL REGIONAL DE LABE
            </p>
          </div>
          <IoClose
            className="text-2xl text-black cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold">
              REPUBLIQUE DE GUINEE <br />
              Travail - Justice - Solidarité <br />N
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-right">
              Date: 02/06/2024 <br />
              Référence: XXXXXXXX
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center p-7">FICHE DE STOCK</h1>
        <div className="gap-2 text-sm font-semibold">
          <h6>Structure :</h6>
          <h6>Nom du produit :</h6>
        </div>
        <div className="mt-10">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <TabListeProd />
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <BtnImprime />
        </div>
      </div>
    </div>
  ) : null;
};

StockProduit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default StockProduit;
