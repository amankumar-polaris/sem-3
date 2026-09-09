import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageProducts, setProduct } from "./productSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const productList = [
//   {
//     title: "Jeans",
//     price: 500,
//   },
//   {
//     title: "Tshirts",
//     price: 600,
//   },
//   {
//     title: "shoes",
//     price: 1000,
//   },
//   {
//     title: "caps",
//     price: 50,
//   },
// ];
const ProductListing = () => {
  const [text, setText] = useState("");
  const[productList,setProductList] = useState([])
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  const fetchData = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductList(response?.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  const handleClick = () => {
    dispatch(setProduct(text));
  };

 
  return (
    <div>
      <header onClick={() => navigate("/cart")}>cart</header>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>click me</button>

      <div className="grid gap-3">
        {productList.map((item) => (
          <div className="border">
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <button onClick={()=>dispatch(manageProducts(item))}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
