import { afterAll, beforeEach, describe, expect, it } from "vitest";
import { setSearchTerm } from "./";
import { type RootState, setupStore } from "../../store";
import type { EnhancedStore } from "@reduxjs/toolkit";
import type { SearchSliceState } from "./";

let store: EnhancedStore<RootState>;
const initialState: SearchSliceState = { searchTerm: "" };

describe("searchSlice", () => {
  beforeEach(() => {
    store = setupStore();
  });

  it("returns initial state", () => {
    const searchState = store.getState().searchSlice;

    expect(searchState).toStrictEqual(initialState);
  });

  it("sets search term", async () => {
    store.dispatch(setSearchTerm("a"));

    const searchState = store.getState().searchSlice;

    expect(searchState.searchTerm).toBe("a");
  });

  it("overwrites previous state", () => {
    store.dispatch(setSearchTerm("a"));
    store.dispatch(setSearchTerm("b"));

    let searchState = store.getState().searchSlice;

    expect(searchState.searchTerm).toBe("b");

    store.dispatch(setSearchTerm("abc"));

    searchState = store.getState().searchSlice;

    expect(searchState.searchTerm).toBe("abc");
  });
});
