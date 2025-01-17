import PropTypes from "prop-types";

import { RiMenu2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const Topbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed bg-white top-0 left-[18rem] w-[calc(100%-18rem)] h-[70px] flex items-center justify-between px-4 max-xl:left-0 max-xl:w-full transition-[left] delay-150">
      <div className="flex items-center gap-10">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="max-xl:grid max-xl:place-items-center transition-all max-xl:bg-slate-200 max-xl:p-3 rounded-full cursor-pointer hidden"
        >
          <RiMenu2Fill size={20} />
        </button>
        <h1 className="font-semibold text-xl max-md:hidden">
          Espace Pharmacien
        </h1>
      </div>

      <div className="flex items-center gap-20 max-md:gap-10">
        <div className="flex items-center">
          <label
            htmlFor="etat"
            className="text-md font-semibold text-gray-500 mr-3 dark:text-gray-400 max-md:hidden"
          >
            inactif
          </label>
          <input
            type="checkbox"
            name="etat"
            defaultChecked
            id="etat"
            className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
          />
          <label
            htmlFor="etat"
            className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden"
          >
            Actif
          </label>
        </div>

        <div>
          <IoNotifications size={24} className="text-neutral-400" />
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://placehold.co/400"
            alt="Medecin profile"
            className="w-11 h-11 rounded-full"
          />
          <div className="flex flex-col max-lg:hidden">
            <strong>Mamadou Djan Diallo</strong>
            <span className="text-xs">Chef service Diabétologie</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
};

export default Topbar;
