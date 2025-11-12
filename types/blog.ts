export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  readingTime: string;
  tags?: string[];
};

export type Post = PostMeta & {
  content: string;
};

