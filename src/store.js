import { configureStore } from "@reduxjs/toolkit";
import { robotsAPI } from "./services";
import { searchSlice } from "./slices";

export default function setupStore(preloadedState) {
  return configureStore({
    reducer: {
      [robotsAPI.reducerPath]: robotsAPI.reducer,
      searchSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(robotsAPI.middleware),
    preloadedState,
  });
}
