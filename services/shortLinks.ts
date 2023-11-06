import { isJson } from "@utils/jsonChecker";
import { axiosRequest } from "./httpConfigs";

// global options
const fetchOptions = (revalidate?: number): RequestInit => {
  return {
    next: { revalidate: revalidate || 0 },
  };
};

// category
export const getCategories = async (): Promise<ICategoryDto[] | undefined> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category`,
    fetchOptions()
  );

  if (!isJson(res)) {
    return undefined;
  }

  return res.json();
};

// blogs
export const getBlogs = async (
  params?: string
): Promise<IGetBlogsResponse | undefined> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog?${params || ""}`,
    fetchOptions()
  );

  if (!isJson(res)) {
    return undefined;
  }

  return res.json();
};

export const deleteBlog = (id: string) => {
  return axiosRequest.delete(`/blog/${id}`);
};

export const getBlog = async (
  blogId?: string
): Promise<IBlogDto | undefined> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogId || ""}`,
    fetchOptions()
  );

  if (!isJson(res)) {
    return undefined;
  }

  return res.json();
};

export const addBlog = (data: FormData) => {
  return axiosRequest.post(`/blog`, data);
};

export const editBlog = (data: FormData, id: string) => {
  return axiosRequest.put(`/blog/${id}`, data);
};
