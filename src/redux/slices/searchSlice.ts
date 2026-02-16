import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;

      return state;
    },
  },
});

export const getSearchTerm = (state: RootState) => state.searchSlice.searchTerm;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
