import type { Frontmatter } from "./posts.server";

export const getPagingData = (request: Request, posts: Frontmatter[]) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? 0;
  const pageNumber = Number(page);

  const from = 10 * pageNumber;
  const to = 10 * (pageNumber + 1);

  return {
    page: pageNumber,
    posts: posts.slice(from, to),
    nextPage: posts.length > to ? pageNumber + 1 : null,
    previousPage: pageNumber > 0 ? pageNumber - 1 : null,
    totalPages: Math.ceil(posts.length / 10),
  };
};
