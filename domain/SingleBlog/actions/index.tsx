"use client";

import { FC } from "react";
import { EditIcon, TrashIcon } from "@components/assets/svg/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteBlog } from "@services/shortLinks";

interface Props {
  blogData: IBlogDto;
}

const Actions: FC<Props> = ({ blogData }) => {
  const editLink = `/blog-form?edit=${blogData._id}`;
  const router = useRouter();
  const data = [
    { title: "دسته بندی", value: blogData.category },
    { title: "نویسنده:", value: blogData.author },
  ];

  const handleDelete = () => {
    if (confirm("آیا مایل به حذف مقاله هستید؟")) {
      deleteBlog(blogData._id)
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
    <div className="w-full flex justify-between items-center py-8 border-t-2 border-dashed border-customGray-100 gap-4 mt-auto">
      <div className="flex items-center gap-14 text-sm">
        {data.map((item, key) => {
          return (
            <span className="flex items-center gap-2.5" key={key}>
              <span className="text-customGray-400">{item.title}</span>
              <span className="text-customGray-500">{item.value}</span>
            </span>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-4 text-customGray-400">
        <Link href={editLink} className="p-2.5">
          <EditIcon className="w-6" />
        </Link>
        <button onClick={handleDelete} className="p-2.5">
          <TrashIcon className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default Actions;
