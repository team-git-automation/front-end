"use client";

import { EditIcon, TrashIcon } from "@components/assets/svg/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { deleteBlog } from "@services/shortLinks";
import { useRouter } from "next/navigation";

interface Props {
  blogItem: IBlogDto;
}

const BlogItem: FC<Props> = ({ blogItem }) => {
  const slug = `/${blogItem._id}`;
  const editLink = `/blog-form?edit=${blogItem._id}`;
  const router = useRouter();

  const handleDelete = () => {
    if (confirm("آیا مایل به حذف مقاله هستید؟")) {
      deleteBlog(blogItem._id)
        .then(() => {
          alert("مقاله حذف شد!");
          router.push("/");
        })
        .catch(() => {
          alert("خطایی هنگام حذف بلاگ رخ داد!");
        });
    }
  };

  return (
    <li className="flex justify-between items-center gap-4 py-4 border-b-2 border-solid border-customGray-100">
      <div className="flex justify-start items-center gap-4 w-3/4">
        <Link
          href={slug}
          className="flex-none flex rounded-2xl overflow-hidden"
        >
          <Image
            width={150}
            height={120}
            alt={blogItem.title}
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${blogItem.image}`}
            className="aspect-[4/3] object-cover w-32 h-full flex-none"
          />
        </Link>
        <div className="flex flex-col justify-center items-start gap-2 overflow-hidden">
          <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full text-xs text-customGray-300 font-bold">
            {blogItem.category}
          </p>
          <h2 className="text-ellipsis whitespace-nowrap overflow-hidden w-full text-customGray-500 font-black">
            <Link href={slug}>{blogItem.title}</Link>
          </h2>
          <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full text-sm text-customGray-200">
            {blogItem.content}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 text-customGray-400">
        <Link href={editLink} className="p-2.5">
          <EditIcon className="w-6" />
        </Link>
        <button onClick={handleDelete} className="p-2.5">
          <TrashIcon className="w-6" />
        </button>
      </div>
    </li>
  );
};

export default BlogItem;
