import { render, screen } from "@testing-library/react";
import { InternalLink } from "~/components/InternalLink";
import { BrowserRouter } from "react-router-dom";

describe("InternalLink", () => {
  test("renders link", () => {
    render(<InternalLink to="/">Test internal link</InternalLink>, {
      wrapper: BrowserRouter,
    });

    expect(
      screen.getByRole("link", { name: "Test internal link" })
    ).toBeDefined();
  });
});
