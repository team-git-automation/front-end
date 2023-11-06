import Link from "next/link";
import SearchInput from "@components/inputs/searchInput";

const SearchBar = () => {
  return (
    <div className="px-4">
      <div className="border-b-2 border-solid border-customGray-100 pt-7 pb-6">
        <Link href="/" className="font-black text-black">
          TEAM GIT
        </Link>
        <SearchInput
          containerClassName="mt-9"
          placeholder="عنوان مقاله را جستجو کنید"
        />
      </div>
    </div>
  );
};

export default SearchBar;
