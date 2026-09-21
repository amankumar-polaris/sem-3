import React, { useState, useEffect, useRef } from "react";
import UserRef from "./UserRef";
import Parent from "./props/Parent";
import A from "./ContextApi/A";
import UseReducer from "./UseReducer.jsx/UseReducer";
import StateManagement from "./UseReducer.jsx/StateManagement";
import ProductListing from "./redux/ProductListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./redux/Cart";
import ReduxThunk from "./redux/ReduxThunk";
import { RTKQuery } from "./redux/RTKQuery.jsx";
import UseMemo from "./optimization/UseMemo.jsx";
import ParentComponent from "./optimization/useCallback/ParentComponent.jsx";
import UseTransition from "./optimization/UseTransition.jsx";
import Debouncing from "./optimization/Debouncing.jsx";
import UseDeferredValue from "./optimization/UseDeferredValue.jsx";

// const App = () => {
//   // let count = 0
//   const[count,setCount] = useState(0)
//   // setCount(1)

//   // const handleClick = ()=>{setCount(prev=>prev+1)
//   //   console.log(count)
//   // }
//   setCount(prev=>prev+1)

//   // console.log(count,'count') //0=>8,1=>2
//   return (
//     <div>
//       <h1>{count}</h1>
//       {/* 0=>9, 1=>0 */}
//       {/* <button onClick = {handleClick}>click me</button> */}
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const[count,setCount] = useState(0)
//   const[value,setValue] = useState(0)
//   useEffect(()=>{
//     console.log(count,'count')
//     console.log(value,'value')
//   },[count])

//   return (
//     <div>
//       {/* <h1>{count}</h1> */}
//       <button onClick={()=>setCount(prev=>prev+1)}>Count</button>
//       <button onClick={()=>setValue(prev=>prev+1)}>Value</button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const inputRef = useRef(null)

//   const handleInput = ()=>{
//     inputRef.current.focus=true

//   }
//   return (
//     <div>
//       <input type="text" onChange = {handleInput} ref = {inputRef}/>
//     </div>
//   )
// }

// export default App

const App = () => {
  return (
    <div>
      {/* <UserRef/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      {/* <UseReducer/> */}
      {/* <StateManagement/> */}
      {/* <ProductListing/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
      {/* <ReduxThunk /> */}
      {/* <RTKQuery /> */}
      {/* <UseMemo /> */}
      {/* <ParentComponent /> */}
      {/* <UseTransition /> */}
      {/* <Debouncing />   */}
      <UseDeferredValue />
    </div>
  );
};

export default App;
