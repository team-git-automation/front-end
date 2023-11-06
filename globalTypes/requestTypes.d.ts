// global
type TSearchParams = {
  [key: string]: string | string[] | undefined;
};

type TAddBlogRequest = {
  image: string;
  title: string;
  content: string;
  author: string;
  category: string;
};
