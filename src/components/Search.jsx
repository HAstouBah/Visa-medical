import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className=" w-1/2 relative max-md:hidden">
      <input
        type="text"
        placeholder="Rechercher un produit"
        className="w-full pl-8 py-2 border-[1.5px] border-slate-100 bg-tertiary text-black rounded-md focus:outline-none font-bold"
      />
      <FaSearch
        size={16}
        className="absolute top-1/3 left-2 text-slate-500 font-bold"
      />
    </div>
  );
};

export default Search;
