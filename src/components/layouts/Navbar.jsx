import { Link, useLocation } from "react-router-dom";

import { IoBagAddSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { TbStackPush } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { RiDonutChartFill } from "react-icons/ri";
import { PiTextIndentBold } from "react-icons/pi";
import { FaProductHunt } from "react-icons/fa6";

const navigations = [
  // {
  //   link: "/accueil",
  //   icon: <IoBagAddSharp size={20} />,
  //   name: "Accueil",
  // },
  // {
  //   link: "/ventes",
  //   icon: <SlBasket size={20} />,
  //   name: "Ventes",
  // },
  // {
  //   link: "/approv-un-service",
  //   name: "Approv.service",
  //   icon: <BiSolidBookAdd size={20} />,
  // },
  // {
  //   link: "/stock",
  //   icon: <BsStack size={20} />,
  //   name: "Stock",
  // },
  // {
  //   link: "/approvisionner-stock",
  //   icon: <TbStackPush size={24} />,
  //   name: "Approv. stock",
  // },
  // {
  //   link: "/fournisseur",
  //   icon: <BsStack size={20} />,
  //   name: "Fournisseur",
  // },
  {
    link: "/produits",
    icon: <FaProductHunt size={20} />,
    name: "Produit",
  },
  {
    link: "/historiques",
    icon: <FaHistory size={20} />,
    name: "Historiques",
  },
  // {
  //   link: "/commandes",
  //   icon: <PiTextIndentBold size={20} />,
  //   name: "Commandes",
  // },
  // {
  //   link: "/rapports",
  //   icon: <RiDonutChartFill size={24} />,
  //   name: "Rapports",
  // },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="mt-10 flex flex-col gap-2">
      {navigations.map((navigation, index) => {
        return (
          <Link
            key={index}
            to={navigation.link}
            className={`flex items-center gap-4 font-semibold text-lg text-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-2 py-2 ${
              location.pathname === navigation.link
                ? "bg-[#c2f3ff] text-[#149cbd]"
                : ""
            }`}
          >
            {navigation.icon}
            <span>{navigation.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
