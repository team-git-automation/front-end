"use client";

import { FC, InputHTMLAttributes, useState } from "react";
import { SearchIcon } from "@components/assets/svg/icons";
import { useRouter } from "next/navigation";

interface props extends InputHTMLAttributes<any> {
  containerClassName?: string;
}

const SearchInput: FC<props> = ({ containerClassName = "", ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(searchValue ? `/?search=${searchValue}` : "/");
  };

  return (
    <div className={`relative text-customGray-300 ${containerClassName}`}>
      <input
        type="text"
        className="w-full outline-none border-2 border-transparent border-solid bg-customGray-100 text-sm rounded-xl py-3 pl-3 pr-11"
        onChange={(e) => setSearchValue(e.target.value)}
        {...props}
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 right-1 p-2.5"
        onClick={handleSearch}
      >
        <SearchIcon className="w-4" />
      </button>
    </div>
  );
};

export default SearchInput;
