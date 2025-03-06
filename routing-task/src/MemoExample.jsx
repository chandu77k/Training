import React, { useState, useMemo } from "react";

const MemoExample = () => {
  const [num, setNum] = useState(1);

  const factorial = useMemo(() => {
    console.log("Calculating factorial");
    const calculateFactorial = (n) => (n <= 1 ? 1 : n * calculateFactorial(n - 1));
    return calculateFactorial(num);
  }, [num]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value) || 1)}
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
};

export default MemoExample;