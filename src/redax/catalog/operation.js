import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchAllTrucks",
  async ({ currentPage, itemsPerPage }) => {
    try {
      const response = await axios.get(
        `/?page=${currentPage}&limit=${itemsPerPage}`
      );
      console.log("API response:", response.data);
      return {
        items: response.data.items || [], // Переконайтеся, що items є масивом
        total: response.data.total || 0, // Переконайтеся, що total є числом
      };
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }
);
