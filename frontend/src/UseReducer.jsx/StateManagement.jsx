import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === "Increment") {
    if (state.count < 10) {
      return { count: state.count + 1 };
    }
    
  }
  else if (action.type === "Decrement") {
    if (state.count < 0) {
      return { count: state.count - 1 };
    }
    
  }
  return state
};

const StateManagement = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  console.log(counter, "counter");
  return (
    <div>
      <h1>{counter.count}</h1>
      <button
        style={{ background: "green", color: "white" }}
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increment
      </button>
      <button
        style={{ background: "red", color: "white" }}
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default StateManagement;
