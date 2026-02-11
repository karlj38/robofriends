import { render } from "vitest-browser-react";
import CardList from "./CardList";

describe("CardList", () => {
  it("renders", async () => {
    const robots = [{ email: "e@mail.com", id: 123, name: "name" }];

    const { container } = await render(<CardList robots={robots} />);

    expect(container).toMatchSnapshot();
  });

  it("throws error if no data", async () => {
    const promise = render(<CardList />);

    await expect(promise).rejects.toThrow(new Error("No robots"));
  });

  it("handles empty array", async () => {
    const { container } = await render(<CardList robots={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
