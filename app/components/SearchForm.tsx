import { Input } from "@mui/material";
import { Form, useSubmit } from "@remix-run/react";
import { FormEvent, useState } from "react";

export const SearchForm = () => {
  const [inputQuery, setInputQuery] = useState("");
  const submit = useSubmit();

  const handleFormChange = (e: FormEvent<HTMLFormElement>) => {
    submit(e.currentTarget, { replace: true });
  };

  return (
    <Form className="mb-10" method="get" onChange={handleFormChange}>
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
        value={inputQuery}
      />
    </Form>
  );
};
