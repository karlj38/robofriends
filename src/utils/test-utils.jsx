import { render } from "vitest-browser-react";
import { Provider } from "react-redux";
import setupStore from "../store";

export async function renderWithProviders(ui, extendedRenderOptions = {}) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  const screen = await render(ui, { wrapper: Wrapper, ...renderOptions });
  // Return an object with the store, and the result of rendering
  return {
    store,
    ...screen,
  };
}
