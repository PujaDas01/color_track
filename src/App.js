import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialColor = "#ff0000";
  const toggleColor = "#f0fff0";

  const boxCount = 9;
  const [boxes, setBoxes] = useState(Array(boxCount).fill(initialColor));

  const handleBoxClick = (index) => {
    setBoxes(prevBoxes => {
      const newBoxes = [...prevBoxes];
      newBoxes[index] = (newBoxes[index] === initialColor) ? toggleColor : initialColor;
      return newBoxes;
    });
  };

  return (
    <div className="App">
      {boxes.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{backgroundColor: color}}
          onClick={() => handleBoxClick(index)}
        ></div>
      ))}
    </div>
  );
}

export default App;