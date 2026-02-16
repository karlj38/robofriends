import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import Scroll from "./Scroll";

describe("Scroll", () => {
  const children = <p>test</p>;

  it("renders", async () => {
    const { container } = await render(<Scroll>{children}</Scroll>);

    expect(container).toMatchSnapshot();
  });
});
