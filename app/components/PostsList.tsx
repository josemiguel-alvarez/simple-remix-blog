import type { Frontmatter } from "~/utils/posts.server";
import { Card } from "./Card";
import { InternalLink } from "./InternalLink";

type Post = Pick<Frontmatter, "formattedDate" | "slug" | "summary" | "title">;

interface Props {
  page: number;
  posts: Post[];
  nextPage: number | null;
  previousPage: number | null;
  totalPages: number;
}

export const PostsList = ({
  posts,
  page,
  previousPage,
  nextPage,
  totalPages,
}: Props) => {
  return (
    <div className="prose-h3:mb-0 lg:prose-h3:mb-0 prose-p:my-2 lg:prose-p:my-2">
      {posts.length >= 1 ? (
        <>
          <div className="not-prose sm:flex flex-wrap">
            {posts.map((post, index) => (
              <div key={post.slug} className="sm:w-1/2 mb-12">
                <div className={index % 2 === 0 ? "sm:mr-6" : "sm:ml-6"}>
                  <Card {...post} />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16 flex justify-between">
            {previousPage !== null ? (
              <InternalLink to={`?page=${previousPage}`}>Previous</InternalLink>
            ) : (
              <div />
            )}
            {page + 1} of {totalPages}
            {nextPage !== null ? (
              <InternalLink to={`?page=${nextPage}`}>Next</InternalLink>
            ) : (
              <div />
            )}
          </div>
        </>
      ) : (
        <div className="not-prose sm:flex flex-wrap">
          <h3>No results</h3>
        </div>
      )}
    </div>
  );
};
