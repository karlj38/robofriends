import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  const MockComponentWithError = () => {
    throw new Error();
  };

  const MockComponent = () => {
    return <p>test</p>;
  };

  // Temporarily suppress console errors so we don't clog the logs
  const realError = console.error;
  beforeEach(() => {
    console.error = vitest.fn();
  });
  afterEach(() => {
    console.error = realError;
  });

  it("renders", () => {
    const { container } = render(
      <ErrorBoundary>
        <MockComponent />
      </ErrorBoundary>,
    );

    expect(container).toMatchSnapshot();
  });

  it("handles error", () => {
    const wrapper = render(
      <ErrorBoundary>
        <MockComponentWithError />
      </ErrorBoundary>,
    );

    expect(wrapper.container).toMatchSnapshot();
  });
});
