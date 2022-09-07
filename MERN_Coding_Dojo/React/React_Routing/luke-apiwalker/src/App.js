import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Display from './components/Display';
import Error from './components/Error';

import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
          <Route path="/"></Route>
          <Route path="/:resource/:id" element={<Display/>}/>
          <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
