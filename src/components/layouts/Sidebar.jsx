import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import vm_logo from "../../assets/images/logo.png";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <div className={`${showSidebar ? "sidebar" : "sidebar-hidden"}`}>
      <div className="w-full relative">
        {showSidebar ? (
          <IoMdClose
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        ) : (
          ""
        )}
        <Link to="/accueil" className="flex items-center gap-4">
          <img src={vm_logo} className="w-11 h-11" alt="VISA MEDICAL LOGO" />
          <span className="text-slate-500">
            <strong className="block text-[#149cbd]">VISA</strong>MEDICAL
          </span>
        </Link>

        <Navbar />
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-4 font-semibold text-lg text-gray-400 border rounded-md px-4 py-2 hover:border-red-500 hover:text-red-500 hover:shadow-md"
      >
        <RiLogoutCircleLine size={20} className="rotate-90 text-red-500" />
        <span>Déconnexion</span>
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
