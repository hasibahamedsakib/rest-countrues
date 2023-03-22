import { useState } from "react";

function Practice() {
  return (
    <div>
      <MyCompo></MyCompo>
    </div>
  );
}

function MyCompo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Practice;
