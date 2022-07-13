import { FiSearch, FiFilter } from "react-icons/fi";

import SecondaryInput from "./SecondaryInput";

const SearchBar = () => {
  return (
    <div className="flex w-full mx-auto mb-5 h-14 md:w-7/12">
      <SecondaryInput
        name="search"
        type="search"
        label="Buscar Producto"
        autoComplete="off"
        icon={<FiSearch size={20} />}
      />
      <button className="flex items-center justify-center w-16 ml-2 bg-white border rounded-lg h-14 border-gray2 text-blue active:bg-blue active:text-white">
        <FiFilter size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
