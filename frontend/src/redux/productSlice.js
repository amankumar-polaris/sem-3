import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  price: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      console.log(action.payload, "redux");
      const myName = action.payload.toUpperCase();
      state.title = myName;
      console.log(state.title,'redux')
      // state.title = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
