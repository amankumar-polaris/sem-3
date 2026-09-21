import axios from "axios";
import React, { useEffect, useState, useTransition } from "react";

const UseTransition = () => {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);

  const [pending, startTransition] = useTransition();

  const fetchData = () => {
    startTransition(async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
        setData(response?.data);
    });
    // try {
    //   setLoading(true);
    //   const response = await axios.get("https://fakestoreapi.com/products");
    //   setData(response?.data);
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setLoading(false);
    // }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data");
  return (
    <div>
      {pending ? (
        <div>...loading</div>
      ) : (
        <>
          {data?.map((item) => (
            <h1>{item.title}</h1>
          ))}
        </>
      )}
    </div>
  );
};

export default UseTransition;
