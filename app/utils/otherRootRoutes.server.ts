import type { EntryContext } from "@remix-run/node";
import { generateRobotsTxt, generateSitemap } from "@balavishnuvj/remix-seo";
import { siteMetadata } from "~/siteMetadata";

type Handler = (
  request: Request,
  remixContext: EntryContext
) => Promise<Response | null> | null;

export const otherRootRoutes: Record<string, Handler> = {
  "/sitemap.xml": async (request, remixContext) => {
    return generateSitemap(request, remixContext, {
      siteUrl: siteMetadata.url,
    });
  },
  "/robots.txt": async () => {
    return generateRobotsTxt([
      { type: "sitemap", value: `${siteMetadata.url}/sitemap.xml` },
    ]);
  },
};

export const otherRootRouteHandlers: Array<Handler> = [
  ...Object.entries(otherRootRoutes).map(([path, handler]) => {
    return (request: Request, remixContext: EntryContext) => {
      if (new URL(request.url).pathname !== path) return null;
      return handler(request, remixContext);
    };
  }),
];
