
// Use Memo hook

import React, { useMemo, useState } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);


  // How you should be using memo
  const squaredValue = useMemo(() => {
    console.log("Expensive calculation fired");
    return count1 * count1;
  }, [count1]);

  // How thw component will be rendered without a memo
  const squaredValue = () => {
    console.log("Expensive calculation fired");
    return count1 * count1;
  };

  return (
    <div>
      <h1>counter : {count1}</h1>
      <h2>Sqaured counter : {squaredValue()}</h2>
      <button onClick={() => setCount1(count1 + 1)}></button>
      <button onClick={() => setCount2(count2 - 1)}></button>
    </div>
  );
};

export default App;


// Create a polyfill for useMemo
