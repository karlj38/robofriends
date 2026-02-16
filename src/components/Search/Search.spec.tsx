import { describe, expect, it } from "vitest";
import { page, userEvent } from "vitest/browser";
import Search from "./Search";

describe("Search", () => {
  it("renders", async () => {
    const { container } = await page.renderWithProviders(<Search />);

    expect(container).toMatchSnapshot();
  });

  it("updates searchTerm state", async () => {
    const { store, ...screen } = await page.renderWithProviders(<Search />);

    const searchInput = screen.getByPlaceholder("search robots");
    await userEvent.type(searchInput, "clem");

    expect(store.getState().searchSlice.searchTerm).toBe("clem");
  });
});
