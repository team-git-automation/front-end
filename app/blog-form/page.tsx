import Content from "@domain/blog-form";
import SidebarLayout from "@layouts/sidebarLayout";
import { getBlog, getCategories } from "@services/shortLinks";
import { FC } from "react";

interface Props {
  searchParams: TSearchParams;
}

const BlogForm: FC<Props> = async ({ searchParams }) => {
  const blogIdForEdit = searchParams.edit;

  const [getBlogRes, getCategoriesRes] = await Promise.all([
    blogIdForEdit ? getBlog(blogIdForEdit as string | undefined) : undefined,
    getCategories(),
  ]);

  return (
    <main>
      <SidebarLayout categoriesList={getCategoriesRes}>
        <Content blogData={getBlogRes} categoriesList={getCategoriesRes} />
      </SidebarLayout>
    </main>
  );
};

export default BlogForm;
