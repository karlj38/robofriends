import { configureStore } from "@reduxjs/toolkit";
import { robotsSlice, searchSlice } from "./slices";

export default function setupStore(preloadedState) {
  return configureStore({
    reducer: { robotsSlice, searchSlice },
    preloadedState,
  });
}
