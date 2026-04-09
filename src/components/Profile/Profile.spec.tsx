import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import type { Robot } from "#/types";
import Profile from "./";

describe("Profile", () => {
  it("renders", async () => {
    const robot: Robot = {
      email: "e@mail.com",
      id: 123,
      name: "name",
      website: "website",
    };

    const { container } = await render(<Profile robot={robot} />);

    expect(container).toMatchSnapshot();
  });
});
