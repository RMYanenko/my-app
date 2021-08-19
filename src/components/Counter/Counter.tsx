import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const int = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={dec}>-</button>
      <button className="btn" onClick={int}>+</button>
    </div>
  );
};

export default Counter;
