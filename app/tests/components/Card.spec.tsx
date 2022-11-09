import { render, screen } from "@testing-library/react";
import { Card } from "~/components/Card";
import { BrowserRouter } from "react-router-dom";

describe("Card", () => {
  test("renders post information", () => {
    render(
      <Card
        title="Post title"
        summary="Post summary"
        slug="post_slug"
        formattedDate="01/01/2022"
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByText("Published 01/01/2022")).toBeDefined();
    expect(screen.getByText("Post title")).toBeDefined();
    expect(screen.getByText("Post summary")).toBeDefined();
    expect(screen.getByRole("link", { name: "Read more" })).toBeDefined();
  });
});
