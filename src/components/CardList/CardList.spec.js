import { render } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList", () => {
  it("renders", () => {
    const robots = [{ email: "e@mail.com", id: 123, name: "name" }];

    const { container } = render(<CardList robots={robots} />);

    expect(container).toMatchSnapshot();
  });

  it("throws error if no data", () => {
    expect(() => render(<CardList />)).toThrow(new Error("No robots"));
  });

  it("handles empty array", () => {
    const { container } = render(<CardList robots={[]} />);

    expect(container.innerHTML).toBe("");
  });
});
