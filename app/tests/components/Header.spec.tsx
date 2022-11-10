import { Header } from "~/components/Header";
import { render, screen } from "@testing-library/react";
import { siteMetadata } from "~/siteMetadata";
import { BrowserRouter } from "react-router-dom";
import { isDarkMode } from "~/utils/darkMode";

jest.mock("~/utils/darkMode", () => ({
  isDarkMode: jest.fn().mockReturnValue(false),
}));

const renderComponent = () => {
  render(<Header />, { wrapper: BrowserRouter });
};

describe("Header", () => {
  test("renders site logo", () => {
    renderComponent();

    expect(screen.getByRole("img", { name: "Website logo" })).toHaveProperty(
      "src",
      `http://localhost${siteMetadata.logo}`
    );
  });

  test("renders site dark logo when dark mode is enabled", () => {
    (isDarkMode as jest.Mock).mockReturnValueOnce(() => true);

    renderComponent();

    expect(screen.getByRole("img", { name: "Website logo" })).toHaveProperty(
      "src",
      `http://localhost${siteMetadata.logo_dark_mode}`
    );
  });

  test("renders site domain if there is no logo", () => {
    const originalSiteMetadata = { ...siteMetadata };
    siteMetadata.logo = "";
    siteMetadata.logo_dark_mode = "";

    renderComponent();

    expect(screen.getByText(siteMetadata.domain)).toBeDefined();

    siteMetadata.logo = originalSiteMetadata.logo;
    siteMetadata.logo_dark_mode = originalSiteMetadata.logo_dark_mode;
  });

  test("renders blog links", () => {
    renderComponent();

    expect(screen.getByRole("link", { name: "Blog" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Tags" })).toBeDefined();
    expect(screen.getByRole("link", { name: "About" })).toBeDefined();
  });

  test("renders menu icon", () => {
    renderComponent();

    expect(screen.getByAltText("Menu")).toBeDefined();
  });
});
