import { render, screen } from "@testing-library/react";
import { PostHeader } from "~/components/PostHeader";
import { BrowserRouter } from "react-router-dom";

describe("PostHeader", () => {
  test("renders post metadata", () => {
    render(
      <PostHeader
        attributes={{
          title: "Test post",
          date: "2021-01-01",
          tags: ["tag1", "tag2"],
        }}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByText("Test post")).toBeDefined();
    expect(screen.getByText("January 1, 2021")).toBeDefined();
    expect(screen.getByText("#tag1")).toBeDefined();
    expect(screen.getByText("#tag2")).toBeDefined();
  });
});
