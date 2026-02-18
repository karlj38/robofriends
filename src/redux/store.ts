import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { robotsAPI } from "./services";
import { searchSlice } from "./slices";

const rootReducer = combineReducers({
  [robotsAPI.reducerPath]: robotsAPI.reducer,
  searchSlice: searchSlice.reducer,
});

export function setupStore(preloadedState?: PreloadedState) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(robotsAPI.middleware),
    preloadedState,
  });
}

const store = setupStore();

export default store;

export type PreloadedState = Parameters<typeof rootReducer>[0];
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
