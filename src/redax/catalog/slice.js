import { fetchTrucks } from "./operation";
import { createSlice } from "@reduxjs/toolkit";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 4,
    total: 0,
    hasNextPage: false,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.items =
          state.currentPage > 1
            ? [...state.items, ...action.payload.items]
            : action.payload.items;
        state.loading = false;
        state.hasNextPage = state.items.length < action.payload.total;
      })
      .addCase(fetchTrucks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export default trucksSlice.reducer;
export const { setPage } = trucksSlice.actions;
