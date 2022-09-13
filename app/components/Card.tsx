import { Link } from "@remix-run/react";
import type { Frontmatter } from "~/utils/posts.server";

interface Props extends Frontmatter {
  index: number;
}

export const Card = ({ title, summary, index, slug, formattedDate }: Props) => {
  return (
    <Link
      className={`relative block p-8 overflow-hidden border border-gray-200 rounded-lg ${
        index % 2 === 0 ? "sm:mr-4" : ""
      } h-full hover:border-gray-400 dark:hover:border-slate-900 dark:bg-white dark:border-slate-900`}
      to={`/posts/${slug}`}
      prefetch="intent"
    >
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-gray-900">{title}</h5>
        </div>
      </div>

      <div className="mt-4 mb-14 sm:pr-8">
        <p className="text-sm text-gray-500">{summary}</p>
      </div>

      <div className="flex flex-col-reverse absolute bottom-7">
        <dt className="text-sm font-medium text-gray-600">Published</dt>
        <dd className="text-xs text-gray-500">{formattedDate}</dd>
      </div>
    </Link>
  );
};
