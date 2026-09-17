import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
import apiReducer from "./fetchApiSlice";
import { rtkQuery } from "./rtkQuery";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    ipa: apiReducer,
    [rtkQuery.reducerPath]: rtkQuery.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkQuery.middleware)
});
