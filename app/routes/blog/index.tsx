import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Frontmatter } from "~/utils/posts.server";
import { getPostsSortedByDate } from "~/utils/posts.server";
import { PostsList } from "~/components/PostsList";
import { getPagingData } from "~/utils/paging.server";
import { SearchForm } from "~/components/SearchForm";
import { useEffect, useState } from "react";
import { useSearchQuery } from "~/hooks/useSearchQuery";

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
  const [query, setQuery] = useState("");
  const controlledPosts = useSearchQuery(posts, query);

  return (
    <>
      <h1>All posts</h1>
      <SearchForm setQuery={setQuery} query={query} isSmall={false} />
      <PostsList
        posts={controlledPosts}
        page={page}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
}
