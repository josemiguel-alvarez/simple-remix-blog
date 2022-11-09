import { render, screen } from "@testing-library/react";
import { ExternalLink } from "~/components/ExternalLink";

describe("ExternalLink", () => {
  test("renders a link and the children passed in the props", () => {
    render(
      <ExternalLink href="https://www.example.com">Example link</ExternalLink>
    );

    expect(screen.getByText("Example link")).toBeDefined();
    expect(screen.getByRole("link")).toHaveProperty(
      "href",
      "https://www.example.com/"
    );
  });
});
