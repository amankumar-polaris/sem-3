import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProducts, removeProduct } from "./productSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(items, "iddd");

  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div className="border">
          <p>{item.id}</p>
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
          <button onClick={() => dispatch(removeProduct(item.id))}>
            remove item
          </button>
        </div>
      ))}
      <button onClick={() => dispatch(removeAllProducts())}>remove all</button>
    </div>
  );
};

export default Cart;
