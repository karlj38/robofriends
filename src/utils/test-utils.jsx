import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import setupStore from "../store";

export function renderWithProviders(ui, extendedRenderOptions = {}) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store, user, and all of RTL's query functions
  return {
    store,
    user: userEvent,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
