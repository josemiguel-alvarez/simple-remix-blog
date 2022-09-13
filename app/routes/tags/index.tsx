import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { POSTS } from "~/utils/posts.server";
import { Badge } from "~/components/Badge";
import type { SEOHandle } from "@balavishnuvj/remix-seo";
import { siteMetadata } from "~/siteMetadata";

interface LoaderData {
  tags: Array<[string, number]>;
}

export const meta: MetaFunction = () => {
  const title = `Tags - ${siteMetadata.author}`;

  return {
    title: title,
    "og:title": title,
    "twitter:title": title,
  };
};

export const loader: LoaderFunction = async () => {
  const tags: { [tag: string]: number } = {};

  POSTS.forEach((post) => {
    post.attributes.tags.forEach((tag: string) => {
      if (tags[tag]) {
        tags[tag]++;
      } else {
        tags[tag] = 1;
      }
    });
  });

  return json({
    tags: Object.entries(tags).sort((a, b) => b[1] - a[1]),
  });
};

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const tags = POSTS.map((post) => post.attributes.tags).flat();

    return Array.from(new Set(tags)).map((tag) => {
      return { route: `/tags/${tag}`, priority: 0.5 };
    });
  },
};

export default function Tags() {
  const { tags } = useLoaderData<LoaderData>();

  return (
    <div className="text-center mb-auto">
      <h1>Tags</h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {tags.map(([tag, count]) => (
          <Badge key={tag} label={`#${tag} (${count})`} linkTo={tag} />
        ))}
      </div>
    </div>
  );
}
