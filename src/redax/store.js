import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./catalog/slice";

const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
});

export default store;
