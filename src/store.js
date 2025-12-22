import { configureStore } from "@reduxjs/toolkit";
import { robotsSlice, searchSlice } from "./slices";

export default configureStore({
  reducer: { robotsSlice, searchSlice },
});
