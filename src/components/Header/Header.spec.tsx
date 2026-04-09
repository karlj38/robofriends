import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import Header from "./Header";

describe("Header", () => {
  it("renders", async () => {
    const { container } = await render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
