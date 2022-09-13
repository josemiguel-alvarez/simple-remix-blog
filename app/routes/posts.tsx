import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { DynamicLinksFunction } from "~/components/DynamicLinks";
import { PostHeader } from "~/components/PostHeader";
import { siteMetadata } from "~/siteMetadata";
import type { Frontmatter } from "~/utils/posts.server";
import { POSTS } from "~/utils/posts.server";

export const meta: MetaFunction = ({ data }) => {
  const { title, summary, image } = data.attributes;
  const postImage = `${siteMetadata.url}${image}`;

  return {
    title: title,
    description: summary,
    "og:title": title,
    "og:description": summary,
    "og:image": postImage,
    "twitter:title": title,
    "twitter:description": summary,
    "twitter:image": postImage,
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

const dynamicLinks: DynamicLinksFunction<typeof import("*.mdx")> = ({
  data,
}) => {
  const slug = data.filename.replace(/\.mdx$/, "");

  return [
    {
      rel: "canonical",
      href: `${siteMetadata.url}/posts/${slug}`,
    },
  ];
};

export const handle = {
  dynamicLinks,
  getSitemapEntries: () => null,
};

export const loader: LoaderFunction = ({ request }) => {
  const slug = request.url.split("/").at(-1);
  const post = POSTS.find((post) => {
    return post.filename === `${slug}.mdx`;
  });

  return json(post);
};

export default function Posts() {
  const post = useLoaderData();
  const { title, summary, date, lastmod, image } = post.attributes;
  const postImage = `${siteMetadata.url}${image}`;

  const maxWidthClasses =
    "prose-pre:max-w-[80vw] md:prose-pre:max-w-2xl lg:prose-pre:max-w-3xl xl:prose-pre:max-w-5xl";
  const textClasses = "prose-a:text-blue-700 dark:prose-a:text-emerald-400";

  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMetadata.url}/posts/${post.filename.replace(".mdx", "")}`,
    },
    headline: title,
    image: {
      "@type": "ImageObject",
      url: postImage,
    },
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: {
      "@type": "Person",
      name: siteMetadata.author,
      url: siteMetadata.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.url}/favicon.ico`,
      },
    },
    description: summary,
  };

  return (
    <div className={`${maxWidthClasses} ${textClasses}`}>
      <PostHeader attributes={post.attributes as Frontmatter} />
      <Outlet />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />
    </div>
  );
}
