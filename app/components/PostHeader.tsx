import { formatDate } from "~/utils/date";
import type { Frontmatter } from "~/utils/posts.server";
import avatar from "../assets/avatar1.webp";
import Divider from "@mui/material/Divider";
import { Badge } from "./Badge";
import { siteMetadata } from "~/siteMetadata";

interface Props {
  attributes: Pick<Frontmatter, "title" | "date" | "tags">;
}

export const PostHeader = ({ attributes }: Props) => {
  return (
    <div className="text-center">
      <h1>{attributes.title}</h1>
      <div className="flex flex-wrap justify-center items-center mb-4">
        <div className="not-prose w-8 h-8 sm:w-12 sm:h-12 mr-2">
          <img
            src={avatar}
            alt="Author's avatar"
            className="rounded-[50%] my-0 w-8 h-8 sm:w-12 sm:h-12"
            loading="lazy"
          />
        </div>
        <span className="mr-2">{siteMetadata.author}</span>
        <span className="mr-2 hidden sm:block"> • </span>
        <span className="">{formatDate(attributes.date)}</span>
      </div>
      <div className="mb-8 flex gap-4 flex-wrap justify-center">
        {attributes.tags.map((tag) => (
          <Badge key={tag} label={`#${tag}`} linkTo={`/tags/${tag}`} />
        ))}
      </div>
      <Divider />
    </div>
  );
};
