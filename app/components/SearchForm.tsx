import TextField from "@mui/material/TextField";

export const SearchForm = () => {
  return (
    <div className="mb-10">
      <TextField
        variant="outlined"
        label="Search"
        size="small"
        name="query"
        classes={{
          root: "border border-gray-200 dark:bg-white dark:border-slate-900",
        }}
      />
    </div>
  );
};

// issues on customizing
// 1. can't change the black border color displayed on hover of the search input
// 2. can't change the color of the input when focused
