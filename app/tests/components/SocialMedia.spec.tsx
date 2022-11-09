import { render, screen } from "@testing-library/react";
import { SocialMedia } from "~/components/SocialMedia";

describe("SocialMedia", () => {
  test("renders social media icons", () => {
    render(<SocialMedia />);

    expect(screen.getByAltText("GitHub profile")).toBeDefined();
    expect(screen.getByAltText("Twitter profile")).toBeDefined();
    expect(screen.getByAltText("LinkedIn profile")).toBeDefined();
  });
});
