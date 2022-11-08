import type { Frontmatter } from "~/utils/posts.server";
import { InternalLink } from "./InternalLink";

type Props = Pick<Frontmatter, "title" | "summary" | "slug" | "formattedDate">;

export const Card = ({ title, summary, slug, formattedDate }: Props) => {
  return (
    <div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Published {formattedDate}
      </div>
      <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </span>
      <p className="text-lg text-gray-600 dark:text-gray-400">{summary}</p>
      <InternalLink to={`/posts/${slug}`}>
        <span className="font-medium text-black dark:text-white">
          Read more
        </span>
      </InternalLink>
    </div>
  );
};
