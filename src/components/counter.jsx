import { useState, useEffect } from "react";
import "./counter.css";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(counter);

  useEffect(() => {
    if (counter >= 10) {
      setCounter2(0);
    } else {
      setCounter2(counter * 2);
    }
  }, [counter]);

  return (
    <div>
      <div className="padding"></div>
      <h1>Counter-1: {counter}</h1>
      <h1>Counter-2: {counter2}</h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};
