"use client";

import { FC, ReactNode } from "react";
import SearchBar from "./sections/searchBar";
import CategoriesList from "./sections/categoriesList";
import SimpleButton from "@components/buttons/simpleButton";
import { PlusIcon } from "@components/assets/svg/icons";
import { usePathname } from "next/navigation";

interface props {
  children?: ReactNode;
  categoriesList?: ICategoryDto[];
}

const SidebarLayout: FC<props> = ({ children, categoriesList }) => {
  const pathname = usePathname();
  const isAddBlogButtonVisible = pathname !== "/blog-form";

  return (
    <div className="bg-customGray-100">
      <div className="h-screen w-full grid grid-cols-5 gap-5 p-5 max-w-containerWidth mx-auto">
        <aside className="bg-white rounded-3xl overflow-hidden flex flex-col">
          <SearchBar />
          <CategoriesList categoriesList={categoriesList}/>
          {isAddBlogButtonVisible && (
            <div className="p-4 pt-0 w-full mt-auto">
              <SimpleButton className="w-full" href="/blog-form">
                <PlusIcon className="w-6" />
                <span>افزودن مقاله</span>
              </SimpleButton>
            </div>
          )}
        </aside>
        <div className="rounded-3xl col-span-4 overflow-y-auto hideSB">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
