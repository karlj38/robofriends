import { page } from "vitest/browser";
import Search from "./Search";

describe("Search", () => {
  it("renders", async () => {
    const { container } = await page.renderWithProviders(<Search />);

    expect(container).toMatchSnapshot();
  });
});
