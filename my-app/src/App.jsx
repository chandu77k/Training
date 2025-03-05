import React, { useState } from 'react'
import InputBox from './InputBox'
import './App.css'
function App() {
  const [charCount, setCharCount] = useState(0);

  const handleLengthChange = (length) => {
    setCharCount(length);
  };

  return (
    <div className="App">
      <h1>Length of Characters</h1>
      <InputBox onLengthChange={handleLengthChange} />
      <p>Character Length: {charCount}</p>
    </div>
  );
}

export default App;
