import React, { useState } from 'react';

function InputBox({ onLengthChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onLengthChange(event.target.value.length);
  };

  const handleKeyPress = (event) => {
    console.log('Key pressed:', event.key);
  };

  const handleMouseOver = () => {
    console.log('Mouse is on the input box');
  };

  const handleBlur = () => {
    alert('You left the input box');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onMouseOver={handleMouseOver}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default InputBox;
