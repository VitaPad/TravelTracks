import { fetchTrucks } from "./operation";

import { createSlice } from "@reduxjs/toolkit";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrucks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export default trucksSlice.reducer;
