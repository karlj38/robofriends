import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search", () => {
  const searchChange = jest.fn();

  it("renders", () => {
    const { container } = render(<Search searchChange={searchChange} />);

    expect(container).toMatchSnapshot();
  });

  it("calls parent fn", () => {
    render(<Search searchChange={searchChange} />);

    userEvent.type(document.getElementById("search"), "test");
    expect(searchChange).toHaveBeenCalledTimes(4);
  });
});
