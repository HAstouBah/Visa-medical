import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { CgLogOff } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftElement = () => {
  return (
    <div className="grid bg-white w-72 h-60 pl-14 mt-5 rounded-r-2xl shadow">
      <Link to="/produits">
        <button className="flex items-center py-5 bg-secondary w-40 h-5 mt-5 pl-6 gap-2 rounded-lg text-primary">
          <FaProductHunt />
          <span className="font-bold">Produits</span>
        </button>
      </Link>
      <Link to="/historiques">
        <button className="flex items-center py-5 bg-secondary w-40 h-5 mt-5 pl-6 gap-2 rounded-lg text-primary">
          <FaHistory />
          <span className="font-bold">Historiques</span>
        </button>
      </Link>
      <Link to="/deconnexion">
        <button className="flex items-center font-bold gap-3 py-12 w-40 h-14 border-t border-slate-300 pt-0  pb-6 mt-20 pl-3 text-red-500">
          <CgLogOff className="text-3xl" />
          <span>Déconnexion</span>
        </button>
      </Link>
    </div>
  );
};

export default LeftElement;
