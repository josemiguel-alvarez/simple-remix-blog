import { render, screen } from "@testing-library/react";
import { PostsList } from "~/components/PostsList";
import { BrowserRouter } from "react-router-dom";

describe("PostsList", () => {
  test("renders 'No results' if there are no posts", () => {
    render(
      <PostsList
        posts={[]}
        page={0}
        previousPage={null}
        nextPage={null}
        totalPages={0}
      />
    );

    expect(screen.getByText("No results")).toBeDefined();
  });

  test("renders posts", () => {
    render(
      <PostsList
        posts={[
          {
            title: "Test post",
            summary: "This is a test post",
            formattedDate: "January 1, 2021",
            slug: "test-post",
          },
        ]}
        page={2}
        previousPage={1}
        nextPage={3}
        totalPages={5}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByText("Test post")).toBeDefined();
    expect(screen.getByText("This is a test post")).toBeDefined();
    expect(screen.getByText("Published January 1, 2021")).toBeDefined();
    expect(screen.getByText("Read more")).toBeDefined();

    expect(screen.getByText("Previous")).toBeDefined();
    expect(screen.getByText("Next")).toBeDefined();

    expect(screen.getByText("3 of 5")).toBeDefined();
  });

  test("renders posts with no previous page", () => {
    render(
      <PostsList
        posts={[
          {
            title: "Test post",
            summary: "This is a test post",
            formattedDate: "January 1, 2021",
            slug: "test-post",
          },
        ]}
        page={0}
        previousPage={null}
        nextPage={1}
        totalPages={5}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByText("Test post")).toBeDefined();
    expect(screen.getByText("This is a test post")).toBeDefined();
    expect(screen.getByText("Published January 1, 2021")).toBeDefined();
    expect(screen.getByText("Read more")).toBeDefined();

    expect(screen.queryByText("Previous")).toBeNull();
    expect(screen.getByText("Next")).toBeDefined();

    expect(screen.getByText("1 of 5")).toBeDefined();
  });

  test("renders posts with no next page", () => {
    render(
      <PostsList
        posts={[
          {
            title: "Test post",
            summary: "This is a test post",
            formattedDate: "January 1, 2021",
            slug: "test-post",
          },
        ]}
        page={1}
        previousPage={0}
        nextPage={null}
        totalPages={2}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByText("Test post")).toBeDefined();
    expect(screen.getByText("This is a test post")).toBeDefined();
    expect(screen.getByText("Published January 1, 2021")).toBeDefined();
    expect(screen.getByText("Read more")).toBeDefined();

    expect(screen.getByText("Previous")).toBeDefined();
    expect(screen.queryByText("Next")).toBeNull();

    expect(screen.getByText("2 of 2")).toBeDefined();
  });

  test("renders posts with no previous or next page", () => {
    render(
      <PostsList
        posts={[
          {
            title: "Test post",
            summary: "This is a test post",
            formattedDate: "January 1, 2021",
            slug: "test-post",
          },
        ]}
        page={0}
        previousPage={null}
        nextPage={null}
        totalPages={1}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByText("Test post")).toBeDefined();
    expect(screen.getByText("This is a test post")).toBeDefined();
    expect(screen.getByText("Published January 1, 2021")).toBeDefined();
    expect(screen.getByText("Read more")).toBeDefined();

    expect(screen.queryByText("Previous")).toBeNull();
    expect(screen.queryByText("Next")).toBeNull();

    expect(screen.getByText("1 of 1")).toBeDefined();
  });
});
