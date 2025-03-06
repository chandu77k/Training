import React, { useState, useCallback } from "react";

const CallbackExample = () => {
  const [text, setText] = useState("");
  const logMessage = useCallback(() => {
    console.log("User typed: ", text);
  }, [text]);

  return (
    <div>
      <h2>useCallback Example</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={logMessage}>
        Log Message
      </button>
    </div>
  );
};

export default CallbackExample;