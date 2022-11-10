import { render, screen } from "@testing-library/react";
import { Footer } from "~/components/Footer";
import { siteMetadata } from "~/siteMetadata";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  test("renders site metadata", () => {
    render(<Footer />, { wrapper: BrowserRouter });

    expect(screen.getByText(siteMetadata.author)).toBeDefined();
    expect(new Date().getFullYear()).toBeDefined();
    expect(siteMetadata.domain).toBeDefined();
  });

  test("renders social media links", () => {
    render(<Footer />, { wrapper: BrowserRouter });

    expect(screen.getByAltText("GitHub profile")).toBeDefined();
    expect(screen.getByAltText("Twitter profile")).toBeDefined();
    expect(screen.getByAltText("LinkedIn profile")).toBeDefined();
  });
});
