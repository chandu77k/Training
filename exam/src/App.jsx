import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(null);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>
      <div style={{ backgroundColor: color}}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, hic commodi voluptates, maxime nisi magnam ut similique repellendus placeat recusandae eos quibusdam atque debitis adipisci numquam totam non sequi mollitia.</p>
      </div>
      <select value={color} onChange={handleColorChange}>
        <option value="violet">Violet</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="grey">Grey</option>
      </select>
    </div>
  );
}

export default App;