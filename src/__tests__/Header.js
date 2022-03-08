import { render, screen } from "@testing-library/react";
import Header from "../components/HeaderSearch";

test("render search header", () => {
  render(<Header />);
  const title = screen.getByText(/The New York Times/i);
  expect(title).toBeInTheDocument();
});
