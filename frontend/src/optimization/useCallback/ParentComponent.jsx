import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const func = useCallback(() => {}, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <ChildComponent func={func} />
    </div>
  );
};

export default ParentComponent;
