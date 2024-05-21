import React from "react";
import logo from "../assets/images/logo.png";
import user3 from "../assets/images/user3.png";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center px-20 py-3">
      <div className="flex items-center gap-2">
        <div className="w-12 h-auto rounded">
          <img src={logo} alt="" className="rounded" />
        </div>
        <div className="flex gap-2">
          <h1 className="text-4xl font-bold text-primary">VISA</h1>
          <h1 className="text-4xl">MEDICAL</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-16 h-auto  border rounded-full  border-black">
          <img src={user3} alt="" className="rounded-full " />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Mamadou Aliou Sow</span>
          <span className="text-sm">Gestionnaire</span>
          <span className="text-sm font-bold">Bureau des entrées</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
