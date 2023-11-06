"use client";

import { FC, ReactElement } from "react";
import { DocumentIcon } from "@components/assets/svg/icons";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ListItemProps {
  name: string;
  icon?: ReactElement;
  all?: boolean;
  pathname: string;
  currentCategory?: string | null;
}

const ListItem: FC<ListItemProps> = ({
  name,
  icon,
  all,
  currentCategory,
  pathname,
}) => {
  const isBlogListPage = pathname === "/";
  const isActive =
    name === currentCategory || (all && !currentCategory && isBlogListPage);
  const href = all ? "/" : `/?category=${name}`;

  return (
    <li>
      <Link
        href={href}
        className={`flex justify-start items-center gap-4 px-4 py-3 text-sm text-customBlue-500 border-solid transition-all ${
          isActive
            ? "border-r-customBlue-500 border-r-2 bg-customBlue-500/10 font-bold"
            : " hover:bg-customBlue-500/10"
        }`}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};

interface CategoriesListProps {
  categoriesList?: ICategoryDto[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categoriesList }) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const pathname = usePathname();

  return (
    <ul className="w-full flex flex-col mt-6 mb-4 overflow-y-scroll hideSB">
      <ListItem
        name="همه مقالات"
        all
        currentCategory={currentCategory}
        icon={<DocumentIcon className="w-6" />}
        pathname={pathname}
      />
      {categoriesList?.map((item, key) => {
        return (
          <ListItem
            key={key}
            name={item.name}
            currentCategory={currentCategory}
            pathname={pathname}
          />
        );
      })}
    </ul>
  );
};

export default CategoriesList;
