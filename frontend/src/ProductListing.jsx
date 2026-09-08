import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "./redux/productSlice";

const ProductListing = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useSelector((state) => console.log(state.product, "selector"));

  const handleClick = () => {
    dispatch(setProduct(text));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default ProductListing;
