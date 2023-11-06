import { FC } from "react";
import SidebarLayout from "@layouts/sidebarLayout";
import { getBlog, getCategories } from "@services/shortLinks";
import Content from "@domain/SingleBlog";

interface Props {
  params?: { blogId: string };
}

const SingleBlog: FC<Props> = async ({ params }) => {
  const [getBlogRes, getCategoriesRes] = await Promise.all([
    getBlog(params?.blogId),
    getCategories(),
  ]);

  return (
    <main>
      <SidebarLayout categoriesList={getCategoriesRes}>
        <Content blogData={getBlogRes} />
      </SidebarLayout>
    </main>
  );
};

export default SingleBlog;
