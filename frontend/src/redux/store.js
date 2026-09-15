import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
import apiReducer from "./fetchApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    ipa: apiReducer,
  },
});
