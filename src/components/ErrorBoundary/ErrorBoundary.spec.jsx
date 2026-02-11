import { render } from "vitest-browser-react";
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

  it("renders", async () => {
    const { container } = await render(
      <ErrorBoundary>
        <MockComponent />
      </ErrorBoundary>,
    );

    expect(container).toMatchSnapshot();
  });

  it("handles error", async () => {
    const { container } = await render(
      <ErrorBoundary>
        <MockComponentWithError />
      </ErrorBoundary>,
    );

    expect(container).toMatchSnapshot();
  });
});
