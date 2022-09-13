import { InternalLink } from "./InternalLink";

export const BlogLinks = () => {
  return (
    <>
      <InternalLink to="/blog">Blog</InternalLink>
      <InternalLink to="/tags">Tags</InternalLink>
      <InternalLink to="/about">About</InternalLink>
    </>
  );
};
