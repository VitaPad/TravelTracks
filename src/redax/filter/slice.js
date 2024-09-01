import { createSlice } from "@reduxjs/toolkit";

const filtersInitial = {
  location: "",
  form: "",
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitial,
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    setFormFilter: (state, action) => {
      state.form = action.payload;
    },
    setACFilter: (state) => {
      state.AC = !state.AC;
    },
    setTransmissionFilter: (state) => {
      state.transmission = !state.transmission;
    },
    setKitchenFilter: (state) => {
      state.kitchen = !state.kitchen;
    },
    setTVFilter: (state) => {
      state.TV = !state.TV;
    },
    setBathroomFilter: (state) => {
      state.bathroom = !state.bathroom;
    },
  },
});

export const {
  setLocationFilter,
  setFormFilter,
  setACFilter,
  setTransmissionFilter,
  setKitchenFilter,
  setTVFilter,
  setBathroomFilter,
  clearLocationFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
