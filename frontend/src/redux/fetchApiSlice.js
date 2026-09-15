import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk(purpose keyword,callbackback function to handle asynchrous task()=>{
//
// fetching data and return
// })

export const fetchStoreApi = createAsyncThunk("productListing", async () => {
  const fetchData = await axios.get("https://fakestoreapi.com/products");
  return fetchData?.data;
});
const initialState = {
  items: [],
  isPending: true,
  error: null,
};
const fetchApiSlice = createSlice({
  name: "apiSlice",
  initialState,
  extraReducers: (builder) => {
    (builder.addCase(fetchStoreApi.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isPending = false;
    }),
      builder.addCase(fetchStoreApi.rejected, (state) => {
        state.error = "Cannt get the data";
      }),
      builder.addCase(fetchStoreApi.pending, (state) => {
        state.isPending = true;
      }));
  },
});

export default fetchApiSlice.reducer