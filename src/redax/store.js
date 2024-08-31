import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./catalog/slice";
import filtersReducer from "./filter/slice";

const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filtersReducer,
  },
});

export default store;
