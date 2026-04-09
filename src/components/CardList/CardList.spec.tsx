import { describe, it, expect } from "vitest";
import { page } from "vitest/browser";
import CardList from "./CardList";
import { Robot } from "#/types";

describe("CardList", () => {
  it("renders", async () => {
    const robots: Array<Robot> = [
      { email: "e@mail.com", id: 123, name: "name", website: "website" },
    ];
    const { container } = await page.renderWithProviders(
      <CardList robots={robots} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("handles empty array", async () => {
    const { container } = await page.renderWithProviders(
      <CardList robots={[]} />,
    );
    expect(container).toBeEmptyDOMElement();

    expect(container).toMatchSnapshot();
  });
});
