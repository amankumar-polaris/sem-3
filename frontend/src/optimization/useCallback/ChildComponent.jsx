import React from "react";

const ChildComponent = () => {
  console.log("childComponent is called");
  return <div></div>;
};

export default React.memo(ChildComponent);
