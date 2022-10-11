import * as ExamplePost1 from "../routes/posts/example-post-1.mdx";
import * as ExamplePost2 from "../routes/posts/example-post-2.mdx";
import * as ExamplePost3 from "../routes/posts/example-post-3.mdx";
import * as ExamplePost4 from "../routes/posts/example-post-4.mdx";
import { formatDate } from "./date";

export interface Frontmatter {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags: string[];
  formattedDate: string;
  images: string[];
}

export const POSTS = [ExamplePost1, ExamplePost2, ExamplePost3, ExamplePost4];

export const getPostsSortedByDate = () => {
  return POSTS.map(postFromModule).sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getFilteredPosts = (query: string) => {
  return POSTS.map(postFromModule).filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );
};

function postFromModule(mod: { attributes: Frontmatter; filename: string }) {
  return {
    ...mod.attributes,
    slug: mod.filename.replace(/\.mdx?$/, ""),
    formattedDate: formatDate(mod.attributes.date),
  };
}
