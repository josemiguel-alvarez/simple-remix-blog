import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import type { Frontmatter } from "~/utils/posts.server";
import { getPostsSortedByDate } from "~/utils/posts.server";
import { PostsList } from "~/components/PostsList";
import { getPagingData } from "~/utils/paging.server";
import { siteMetadata } from "~/siteMetadata";

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

  return (
    <div className="w-full">
      <h1>#{tag}</h1>
      <PostsList
        posts={posts}
        page={page}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}
