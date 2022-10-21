import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components/Card";
import { InternalLink } from "~/components/InternalLink";
import { siteMetadata } from "~/siteMetadata";
import type { Frontmatter } from "~/utils/posts.server";
import { getPostsSortedByDate } from "~/utils/posts.server";
import avatar from "../assets/avatar10.webp";

interface LoaderData {
  posts: Frontmatter[];
}

export const loader = async () => {
  const posts = getPostsSortedByDate().slice(0, 4);

  return json<LoaderData>({
    posts: posts,
  });
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div className="max-w-full prose-h1:mb-0 lg:prose-h1:mb-0  prose-h3:mb-0 lg:prose-h3:mb-0 prose-p:my-2 lg:prose-p:my-2">
      <div className="flex flex-row items-center">
        <div className="flex items-center w-32 h-32 not-prose">
          <img
            src={avatar}
            alt="Author's avatar"
            className="rounded-[50%] my-0"
            loading="lazy"
          />
        </div>
        <h1 className="font-medium pl-4 xl:pl-8">José Miguel Álvarez Vañó</h1>
      </div>

      <p className="pt-4">{siteMetadata.description}</p>

      <div className="mt-16">
        <div className="not-prose sm:flex flex-wrap">
          {posts.map((post, index) => (
            <div key={post.slug} className="sm:w-1/2 mb-12">
              <div className={index % 2 === 0 ? "sm:mr-6" : "sm:ml-6"}>
                <Card {...post} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 text-right">
        <InternalLink to="/blog">Older posts</InternalLink>
      </div>
    </div>
  );
}
