// category
interface ICategoryDto {
  _id: string;
  name: string;
}

// blogs
interface IGetBlogsResponse {
  blogs: IBlogDto[];
}

interface IBlogDto {
  _id: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category: string;
  createdAt?: string | null;
  updatedAt?: string | null;
}
