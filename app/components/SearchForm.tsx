import { Input } from "@mui/material";
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
      <Input
        name="query"
        size={isSmall ? "small" : "medium"}
        disableUnderline={true}
        classes={{
          root: `${isSmall ? "md:w-64 w-full" : "sm:w-80 w-full"}`,
          input:
            "border border-gray-400 dark:text-slate-200 dark:border-slate-200 px-5 py-4 border-solid rounded-md block ease-in duration-300 dark:focus:border-blue-400 focus:border-blue-400",
          inputSizeSmall: "py-2",
        }}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
