import { Input } from "@mui/material";
import { useSubmit, Form, useLocation } from "@remix-run/react";
import type { FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  query: string | null;
}

let timeoutId: NodeJS.Timeout;

export const SearchForm = ({ query }: Props) => {
  const submit = useSubmit();
  const location = useLocation();
  const [inputQuery, setInputQuery] = useState(query || "");

  const handleFormChange = (e: FormEvent<HTMLFormElement>) => {
    if (timeoutId) clearTimeout(timeoutId);

    const form = e.currentTarget;
    timeoutId = setTimeout(() => {
      submit(form, { replace: true, action: location.pathname });
    }, 300);
  };

  useEffect(() => {
    setInputQuery(query || "");
  }, [query]);

  return (
    <Form className="mb-10" onChange={handleFormChange}>
      <Input
        name="q"
        disableUnderline={true}
        classes={{
          root: "md:w-72 w-full",
          input:
            "border border-gray-400 dark:text-gray-700 dark:bg-gray-100 px-5 py-3 border-solid rounded-md block ease-in duration-300 dark:focus:border-blue-400 focus:border-blue-400",
        }}
        placeholder="Search"
        onChange={(e) => setInputQuery(e.target.value)}
        value={inputQuery}
      />
    </Form>
  );
};
