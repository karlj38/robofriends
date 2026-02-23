import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { robotsAPI } from "./services";
import { searchSlice } from "./slices";

const rootReducer = combineReducers({
  [robotsAPI.reducerPath]: robotsAPI.reducer,
  searchSlice: searchSlice.reducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(robotsAPI.middleware),
  });
}

// export type PreloadedState = Parameters<typeof rootReducer>[0];
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(setupStore);
