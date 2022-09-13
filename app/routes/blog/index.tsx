import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Frontmatter } from "~/utils/posts.server";
import { getPostsSortedByDate } from "~/utils/posts.server";
import { PostsList } from "~/components/PostsList";
import { getPagingData } from "~/utils/paging.server";

interface LoaderData {
  page: number;
  posts: Frontmatter[];
  nextPage: number | null;
  previousPage: number | null;
  totalPages: number;
}

export const loader = async ({ request }: { request: Request }) => {
  const posts = getPostsSortedByDate();
  const data = getPagingData(request, posts);

  return json<LoaderData>(data);
};

export default function Blog() {
  const { page, posts, nextPage, previousPage, totalPages } =
    useLoaderData<LoaderData>();

  return (
    <>
      <h1>All posts</h1>
      <PostsList
        posts={posts}
        page={page}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
}
