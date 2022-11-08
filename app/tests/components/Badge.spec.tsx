import { Badge } from "~/components/Badge";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Badge", () => {
  test("renders correctly", () => {
    const { container } = render(
      <Badge label="Test Badge" linkTo="http://example.com" />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(container).toMatchSnapshot();
  });

  test("renders a link with a label", () => {
    render(<Badge label="Test Badge" linkTo="http://example.com" />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("Test Badge")).toBeDefined();
    expect(screen.getByRole("link")).toBeDefined();
  });
});
