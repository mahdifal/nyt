import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("full app rendering/navigating", () => {
  render(<App />, { wrapper: MemoryRouter });

  const element = screen.getByTestId("spin");
  // verify page content for expected route
  expect(element).toBeInTheDocument();
});
