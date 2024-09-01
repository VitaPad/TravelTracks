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
      /*    console.log("API response:", response.data); */
      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }
);

export const fetchTruksFilter = createAsyncThunk(
  "trucks/fetchTruksFilter",
  async ({ currentPage, itemsPerPage, filters }) => {
    const query = new URLSearchParams({
      page: currentPage,
      limit: itemsPerPage,
      ...(filters.location && { location: filters.location }),
      ...(filters.form && { form: filters.form }),
      ...(filters.AC && { AC: filters.AC }),
      ...(filters.transmission && { transmission: filters.transmission }),
      ...(filters.kitchen && { kitchen: filters.kitchen }),
      ...(filters.TV && { TV: filters.TV }),
      ...(filters.bathroom && { bathroom: filters.bathroom }),
    });
    try {
      const response = await axios.get(`/?${query.toString()}`);
      console.log("API response:", response.data);
      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }
);

export const fetchTruckById = createAsyncThunk(
  "catalog/fetchTruckById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
