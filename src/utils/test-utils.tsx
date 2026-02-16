import React, { PropsWithChildren } from "react";
import { render } from "vitest-browser-react";
import type { RenderOptions } from "vitest-browser-react";
import { Provider } from "react-redux";

import type { AppStore, PreloadedState } from "../redux/store";
import { setupStore } from "../redux/store";

// This type interface extends the default options for render from vitest-browser-react, as well
// as allows the user to specify other things such as preloadedState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
  preloadedState?: PreloadedState;
  store?: AppStore;
}

export async function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  const screen = await render(ui, { wrapper: Wrapper, ...renderOptions });
  // Return an object with the store, and the result of rendering
  return {
    store,
    ...screen,
  };
}
