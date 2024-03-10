import React from "react";
import { MdSearch } from "react-icons/md";

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px] w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-t border-none outline-none"
      />
    </div>
  );
};

export default Search;
