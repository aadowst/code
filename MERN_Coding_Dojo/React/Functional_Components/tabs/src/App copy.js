import Tab from './components/Tab';
import { useState } from 'react';
import './App.css';

function App() {

  const [content, setContent] = useState("");

  const tabsData = [
    {label: "tab 1", content: "here is some sweet content"},
    {label: "tab 2", content: "nah, here is a some better content"},
    {label: "tab 3", content: "no way, this is the best content"}
  ]

  const handleClick = (event, index=1) => {
    console.log("event, index");
    const contentData = filterContent(index);
    setContent(contentData);
  }

  const filterContent = (clickedIndex) => {


    return (
      tabsData.map((tab) => {
        return (tab.content)}).filter((item, index) => {
          return index === clickedIndex
        }
        ))

  }

  return (
    <>
    <div className='container'>
    <div className="App" style={{display: 'flex', width: 400, justifyContent: "space-between"}}>
      {
        tabsData.map((tab, index) => {
          return(
            <>
            <button key={index} onClick= {(e) => {handleClick(e, index)}}>{tab.label}</button>

            </>
          )

        })
      }
    </div>
    <div>
      <hr/>
      <p>
      {content}

      </p>
    </div>
    </div>
    </>
  );
}

export default App;
