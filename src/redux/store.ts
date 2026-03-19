import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./slices";

const rootReducer = combineReducers({
  searchSlice: searchSlice.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
