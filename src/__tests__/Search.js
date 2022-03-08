import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "../components/SearchInput";

describe("<SearchInput />", () => {
  test("render search input", () => {
    render(<SearchInput />);

    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("pass text search to test input search field", () => {
    render(<SearchInput />);

    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "computer");

    expect(inputEl).toHaveValue("computer");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});
