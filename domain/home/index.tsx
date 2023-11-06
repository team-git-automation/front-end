import { FC } from "react";
import BlogItem from "./sections/blogItem";

interface Props {
  blogsList?: IBlogDto[];
}

const Content: FC<Props> = ({ blogsList }) => {
  return (
    <div className="h-full bg-white overflow-y-auto hideSB">
      <ul className="w-full px-4">
        {blogsList?.map((blogItem, key) => {
          return <BlogItem blogItem={blogItem} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default Content;
