import { Input } from "@mui/material";
import { useSubmit } from "@remix-run/react";
import { FormEvent, useState } from "react";

export const SearchForm = ({ query }: { query: string | null }) => {
  const [inputQuery, setInputQuery] = useState("");
  const submit = useSubmit();

  const handleFormChange = (e: FormEvent<HTMLFormElement>) => {
    submit(e.currentTarget, { replace: true, method: "get" });
  };

  return (
    <form className="mb-10" onChange={handleFormChange}>
      <Input
        name="q"
        disableUnderline={true}
        classes={{
          root: "md:w-72 w-full",
          input:
            "border border-gray-400 dark:text-slate-200 dark:border-slate-200 px-5 py-3 border-solid rounded-md block ease-in duration-300 dark:focus:border-blue-400 focus:border-blue-400",
        }}
        placeholder="Search"
        onChange={(e) => setInputQuery(e.target.value)}
        value={inputQuery ? inputQuery : query ?? ""}
      />
    </form>
  );
};
