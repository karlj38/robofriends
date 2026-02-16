import { createSlice } from "@reduxjs/toolkit";
import type { SearchSliceState } from "./types";

const initialState: SearchSliceState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;

      return state;
    },
  },
});

export default searchSlice;
