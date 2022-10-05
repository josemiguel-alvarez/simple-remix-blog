import { useEffect, useState } from "react";
import { Frontmatter } from "~/utils/posts.server";

export const useSearchQuery = (posts: Frontmatter[], query: string) => {
  const [filteredPosts, setFilteredPosts] = useState<Frontmatter[]>(posts);

  useEffect(() => {
    if (query.length >= 3) {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [query]);

  return filteredPosts;
};
