import TextField from "@mui/material/TextField";
import { Dispatch } from "react";

export const SearchForm = ({
  setQuery,
  query,
  isSmall,
}: {
  setQuery: Dispatch<string>;
  query: string;
  isSmall: boolean;
}) => {
  return (
    <div className={`mb-10 ${!isSmall && "w-full text-center"}`}>
      <TextField
        variant="outlined"
        label="Search"
        name="query"
        size={isSmall ? "small" : "medium"}
        classes={{
          root: `border border-gray-200 dark:bg-white dark:border-slate-900 ${
            isSmall ? "md:w-64 w-full" : "sm:w-80 w-full"
          }`,
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
