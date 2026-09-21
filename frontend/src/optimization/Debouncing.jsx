import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [debouncedText, setDebouncedText] = useState("");
  const [debouncedCount, setDebouncedCount] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(text);
      setDebouncedCount((prev) => prev + 1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [text]);
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
      <h1>{`text : ${text} count: ${count}`}</h1>
      <p>{`debounce : ${debouncedText} count: ${debouncedCount}`}</p>
    </div>
  );
};

export default Debouncing;
