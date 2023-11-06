import Image from "next/image";
import { FC } from "react";
import Actions from "./actions";

interface Props {
  blogData?: IBlogDto;
}

const Content: FC<Props> = ({ blogData }) => {
  return (
    <div className="h-full bg-white overflow-y-auto hideSB p-4 pb-0">
      {blogData && (
        <div className="flex flex-col justify-center items-center mx-auto w-3/4 gap-14">
          <Image
            width={800}
            height={600}
            alt={blogData.title}
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${blogData.image}`}
            className="aspect-[4/3] object-cover w-3/4 rounded-2xl"
          />
          <h1 className="text-center text-3xl font-black">{blogData.title}</h1>
          <p className="text-lg w-full leading-loose">{blogData.content}</p>
          <Actions blogData={blogData} />
        </div>
      )}
    </div>
  );
};

export default Content;
