import Tab from './components/Tab';
import { useState } from 'react';
import './App.css';

function App() {

  const tabsData = [
    { label: "tab 1", content: "here is some sweet content" },
    { label: "tab 2", content: "nah, here is a some better content" },
    { label: "tab 3", content: "no way, this is the best content" }
  ]


  return (
    <>
      <div className='container'>

          <Tab tabsData={tabsData} />

      </div>
    </>
  );
}

export default App;
