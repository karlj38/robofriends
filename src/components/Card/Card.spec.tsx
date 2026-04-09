import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import type { Robot } from "../../types/";
import Card from "./Card";

describe("Card", () => {
  it("renders", async () => {
    const robot: Robot = {
      email: "e@mail.com",
      id: 123,
      name: "name",
      website: "website",
    };

    const { container } = await render(<Card robot={robot} />);

    expect(container).toMatchSnapshot();
  });
});
