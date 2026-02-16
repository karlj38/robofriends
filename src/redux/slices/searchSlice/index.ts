import searchSlice from "./searchSlice";
import type { RootState } from "../../store";
import type { SearchSliceState } from "./types";

export type { SearchSliceState };

export const getSearchTerm = (state: RootState) => state.searchSlice.searchTerm;
export const { setSearchTerm } = searchSlice.actions;

export default searchSlice;
