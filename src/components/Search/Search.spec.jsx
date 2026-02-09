import { renderWithProviders } from "../../utils/test-utils";
import Search from "./Search";

describe("Search", () => {
  it("renders", () => {
    const { container } = renderWithProviders(<Search />);

    expect(container).toMatchSnapshot();
  });
});
