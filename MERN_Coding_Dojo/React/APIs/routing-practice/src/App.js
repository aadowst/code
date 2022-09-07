import React from 'react';
import { Routes, Route, useParams} from 'react-router-dom';
import './App.css';

const Home = (props) => {
  return (
    <h1>Welcome</h1>
    );
}

const OneWord = (props) => {
  const { word } = useParams();
  if(isNaN(word)){
    return(
      <h1>The word is:  {word}</h1>
    );
  } else {
    return(
      <h1>The number is:  {word}</h1>
      );
  }
}

const ThreeWords = (props) => {
  const { word, font, background } = useParams();
  return(
    <div style={{backgroundColor: background}}>

    <h1 style={{color: font}}>The word is:  {word}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/:word" element={<OneWord/>}></Route>
        <Route path="/:word/:font/:background" element={<ThreeWords/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
