import React, { useDeferredValue, useMemo, useState } from "react";

const UseDeferredValue = () => {
  const [text, setText] = useState("");
  const deferredValue = useDeferredValue(text);
  const preview = useMemo(() => {
    let sum = 0;

    for (let i = 0; i < 999999999; i++) {
      sum += i;
    }
    return deferredValue.toUpperCase();
  }, [deferredValue]);
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>text: {text}</p>
      <p>preview: {preview}</p>
    </div>
  );
};

export default UseDeferredValue;
