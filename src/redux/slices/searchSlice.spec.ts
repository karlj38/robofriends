import { describe, expect, it } from "vitest";
import searchReducer, { setSearchTerm } from "./searchSlice";

describe("searchSlice", () => {
  const initialState = { searchTerm: "" };

  it("returns initial state", () => {
    expect(searchReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("sets search term", () => {
    expect(searchReducer(initialState, setSearchTerm("a"))).toEqual({
      searchTerm: "a",
    });
  });

  it("overwrites previous state", () => {
    expect(searchReducer({ searchTerm: "a" }, setSearchTerm("b"))).toEqual({
      searchTerm: "b",
    });
  });
});
