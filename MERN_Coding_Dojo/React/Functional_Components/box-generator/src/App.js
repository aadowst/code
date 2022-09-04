import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import Box from './components/Box';

function App() {

  const boxColorsData = []

  const[boxColors, setBoxColors] = useState(boxColorsData);

  const colorSubmitted = (color) => {
    const updatedBoxColors = [...boxColors, color]
    console.log(updatedBoxColors);
    setBoxColors(updatedBoxColors);
  }


  return (
    <div className="App">
      <Form onNewColor={colorSubmitted}/> 

      {
        boxColors.map((color, index) => {
          return (
            <Box color={color} key={index}/>
          );
        })
      } 

    </div>
  );
}

export default App;
