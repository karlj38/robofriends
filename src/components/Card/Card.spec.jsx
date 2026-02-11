import { render } from "vitest-browser-react";
import Card from "./Card";

describe("Card", () => {
  it("renders", async () => {
    const robot = { email: "e@mail.com", id: 123, name: "name" };

    const { container } = await render(<Card robot={robot} />);

    expect(container).toMatchSnapshot();
  });
});
