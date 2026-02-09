import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders", () => {
    const robot = { email: "e@mail.com", id: 123, name: "name" };

    const { container } = render(<Card robot={robot} />);

    expect(container).toMatchSnapshot();
  });
});
