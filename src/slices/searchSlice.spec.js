import searchReducer, { setSearch } from "./searchSlice";

describe("searchSlice", () => {
  const initialState = { searchTerm: "" };

  it("returns initial state", () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  it("sets search term", () => {
    expect(searchReducer(initialState, setSearch("a"))).toEqual({
      searchTerm: "a",
    });
  });

  it("overwrites previous state", () => {
    expect(searchReducer({ searchTerm: "a" }, setSearch("b"))).toEqual({
      searchTerm: "b",
    });
  });
});
