import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown.jsx";
import PriceRangeDropdown from "./PriceRangeDropdown.jsx";
import PropertyDropdown from "./PropertyDropdown.jsx";
import { FaSearch } from "react-icons/fa";
import { HouseContext } from "./HouseContext.jsx";
const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className=" bg-white px-[30px] py-6 max-w-[1170px] mx-16 font-bold flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1  lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-900 transition w-full lg:max-w-[162px] h-14  rounded-lg flex justify-center items-center text-white text-lg"
      >
        <FaSearch />
      </button>
    </div>
  );
};
export default Search;
