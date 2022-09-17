import { getPostsSortedByDate } from "~/utils/posts.server";
import { siteMetadata } from "../siteMetadata";

export async function loader() {
  const posts = getPostsSortedByDate();

  const feed = `<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>${siteMetadata.title}</title>
        <link>${siteMetadata.url}</link>
        <description>${siteMetadata.description}</description>
        <language>en-us</language>
        <managingEditor>${siteMetadata.email} (${
    siteMetadata.author
  })</managingEditor>
        <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${
          siteMetadata.url
        }/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            (post) =>
              `<item>
                <guid>${siteMetadata.url}/posts/${post.slug}</guid>
                <title>${post.title}</title>
                <link>${siteMetadata.url}/posts/${post.slug}</link>
                <description>${post.summary}</description>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                <author>${siteMetadata.email} (${siteMetadata.author})</author>
                ${post.tags
                  .map((tag) => `<category>${tag}</category>`)
                  .join("")}
            </item>
            `
          )
          .join("")}
    </channel>
  </rss>`;

  return new Response(feed, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
