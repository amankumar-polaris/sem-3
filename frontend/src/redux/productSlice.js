import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    manageProducts: (state, action) => {
      const existedProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!existedProduct) state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      const filteredProduct = state.items.filter(
        (item) => item.id !== action.payload,
      );
      state.items = filteredProduct;
    },
    removeAllProducts:(state)=>{
      state.items = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProduct, manageProducts,removeProduct,removeAllProducts } = productSlice.actions;

export default productSlice.reducer;
