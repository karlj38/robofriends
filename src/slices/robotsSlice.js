import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: {
    error: null,
    isPending: false,
    robots: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRobots.pending, (state) => {
        state.isPending = true;
      })
      .addCase(fetchRobots.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error;
      })
      .addCase(fetchRobots.fulfilled, (state, action) => {
        state.isPending = false;
        state.robots = action.payload;
      });
  },
});

export const fetchRobots = createAsyncThunk("robots/fetchRobots", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
});

export default robotsSlice.reducer;
