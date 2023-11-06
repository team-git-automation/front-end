"use client";

import { ArrowIcon, DocumentIcon } from "@components/assets/svg/icons";
import SimpleButton from "@components/buttons/simpleButton";
import { addBlog, editBlog } from "@services/shortLinks";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  blogData?: IBlogDto;
  categoriesList?: ICategoryDto[];
}

const Content: FC<Props> = ({ blogData, categoriesList }) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageLink, setImageLink] = useState<string | null | undefined>(
    blogData?.image && `${process.env.NEXT_PUBLIC_BASE_URL}/${blogData?.image}`
  );
  const commonInputClasses =
    "text-customGray-400 rounded-2xl border-customGray-100 border-2 border-solid transition-all focus:border-customGray-200 outline-none";
  const defaultCategory = categoriesList?.find(
    (category) => category.name === blogData?.category
  );

  const handleOpenFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event?.target?.files;
    const file = files && files[0];
    const reader = new FileReader();

    reader.onload = () => setImageLink(reader.result as string);
    file && reader.readAsDataURL(file);
  };

  const handleSubmit = (formElement: FormEvent<HTMLFormElement>) => {
    formElement.preventDefault();

    if (imageLink) {
      const formData = new FormData(formElement.currentTarget);
      const apiFunction = blogData ? editBlog : addBlog;

      apiFunction(formData, blogData?._id as string)
        .then(() => {
          blogData ? alert("مقاله ویرایش شد.") : alert("مقاله افزوده شد.");
          blogData ? router.push(`/${blogData._id}`) : router.push("/");
        })
        .catch(() => {
          alert("خطایی هنگام افزودن مقاله رخ داد...");
        });
    } else {
      alert("افزودن تصویر ضروری است.");
    }
  };

  return (
    <div className="h-full bg-white overflow-y-auto hideSB">
      <form
        className="flex flex-col w-full gap-4 relative h-full"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex p-4 pb-0">
          <div
            className="w-1/2 aspect-[4/3] mx-auto overflow-hidden rounded-2xl border-2 border-solid border-customGray-100 flex justify-center items-center cursor-pointer"
            onClick={handleOpenFileInput}
          >
            {imageLink ? (
              <img
                src={imageLink}
                alt="blogs image"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex p-4">
                <SimpleButton className="w-56">افزودن تصویر</SimpleButton>
              </div>
            )}
            <input
              name="image"
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleSetImage}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 px-4">
          <input
            defaultValue={blogData?.title}
            type="text"
            placeholder="عنوان مقاله را وارد کنید"
            className={`${commonInputClasses} p-6 text-2xl`}
            required
            name="title"
          />
          <textarea
            defaultValue={blogData?.content}
            placeholder="متن مقاله را اینجا بنویسید ..."
            rows={10}
            className={`${commonInputClasses} p-6 text-lg`}
            required
            name="content"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
          <input
            required
            type="text"
            className={`${commonInputClasses} px-5 py-4 text-base`}
            placeholder="نام نویسنده"
            defaultValue={blogData?.author}
            name="author"
          />
          <select
            required
            className={`${commonInputClasses} px-5 py-4 text-base`}
            defaultValue={defaultCategory?._id}
            name="category"
          >
            {categoriesList?.map((category, key) => {
              return (
                <option value={category._id} key={key}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-4 shadow-customShadow bg-white w-full flex justify-end items-center mt-auto">
          <SimpleButton className="w-56" type="submit">
            {blogData ? (
              <>
                <span>ویرایش مقاله</span>
                <DocumentIcon className="w-4" />
              </>
            ) : (
              <>
                <span>انتشار مقاله</span>
                <ArrowIcon className="w-4" />
              </>
            )}
          </SimpleButton>
        </div>
      </form>
    </div>
  );
};

export default Content;
