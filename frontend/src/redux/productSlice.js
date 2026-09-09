import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  items:[]
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
    manageProducts:(state,action)=>{
      state.items.push(action.payload)
      console.log(state.items,'redux')
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProduct,manageProducts } = productSlice.actions;

export default productSlice.reducer;
