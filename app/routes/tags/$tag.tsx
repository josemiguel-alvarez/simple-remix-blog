import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import type { Frontmatter } from "~/utils/posts.server";
import { getPostsSortedByDate } from "~/utils/posts.server";
import { PostsList } from "~/components/PostsList";
import { getPagingData } from "~/utils/paging.server";
import { siteMetadata } from "~/siteMetadata";
import { SearchForm } from "~/components/SearchForm";
import { useSearchQuery } from "~/hooks/useSearchQuery";
import { useState } from "react";

interface Params {
  tag: string;
}

interface LoaderData {
  posts: Frontmatter[];
  nextPage: number | null;
  previousPage: number | null;
  totalPages: number;
  page: number;
}

export const meta: MetaFunction = ({ params }) => {
  const { tag } = params;
  const title = `${tag} - ${siteMetadata.author}`;
  const summary = `Posts about ${tag} of ${siteMetadata.author}.`;

  return {
    title: title,
    description: summary,
    "og:title": title,
    "og:description": summary,
    "twitter:title": title,
    "twitter:description": summary,
  };
};

export const loader = async ({
  params,
  request,
}: {
  params: Params;
  request: Request;
}) => {
  const { tag } = params;
  const posts = getPostsSortedByDate().filter((post) =>
    post.tags.includes(tag)
  );
  const data = getPagingData(request, posts);

  return json<LoaderData>(data);
};

export default function Tag() {
  const { tag } = useParams();
  const { posts, nextPage, previousPage, totalPages, page } =
    useLoaderData<LoaderData>();
  const [query, setQuery] = useState("");
  const controlledPosts = useSearchQuery(posts, query);

  return (
    <div className="w-full">
      <div className="md:flex md:justify-between md:items-center">
        <h1>#{tag}</h1>
        <SearchForm setQuery={setQuery} query={query} isSmall={true} />
      </div>
      <PostsList
        posts={controlledPosts}
        page={page}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}
