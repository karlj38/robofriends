import { renderWithProviders } from "../../utils/test-utils";
import Header from "./Header";

describe("Header", () => {
  it("renders", () => {
    const { container } = renderWithProviders(<Header />);

    expect(container).toMatchSnapshot();
  });
});
