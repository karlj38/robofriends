import { page } from "vitest/browser";
import Header from "./Header";

describe("Header", () => {
  it("renders", async () => {
    const { container } = await page.renderWithProviders(<Header />);

    expect(container).toMatchSnapshot();
  });
});
