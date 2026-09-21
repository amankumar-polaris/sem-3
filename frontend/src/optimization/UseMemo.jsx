import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  // const calculate = useMemo(() => {
  //     let sum = 0
  //     for (let i = 0; i < 999999999; i++) {
  //         sum += i
  //     }
  //     return sum
  // },[])
 // useMemo(()=>{},[])
const calculate = useMemo( () => {
    let sum = 0;
    for (let i = 0; i < 999999999; i++) {
      sum += i;
    }
    return sum;
  },[])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <p>{calculate}</p>
    </div>
  );
};

export default UseMemo;
