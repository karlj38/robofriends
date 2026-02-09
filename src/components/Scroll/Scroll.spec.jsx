import { render } from "@testing-library/react";
import Scroll from "./Scroll";

describe("Scroll", () => {
  const children = <p>test</p>;

  it("renders", () => {
    const { container } = render(<Scroll>{children}</Scroll>);

    expect(container).toMatchSnapshot();
  });
});
