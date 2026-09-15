import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreApi } from "./fetchApiSlice";


const ReduxThunk = () => {
  const dispatch = useDispatch();
  const {items,isPending,error} = useSelector((state) => state.ipa);
 
  console.log(items,isPending,error)
  useEffect(() => {
    dispatch(fetchStoreApi());
  }, []);
  return <div>Hello</div>;
};

export default ReduxThunk;
