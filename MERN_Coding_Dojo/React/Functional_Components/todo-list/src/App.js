import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import List from './components/List'

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoSubmitted = (todo) => {
    const updatedTodoList = [todo, ...todoList]
    setTodoList(updatedTodoList)
  }
  console.log(todoList);

  const deleteTodo = (e, id) => {
    console.log("the id in app.js is ", id)
    const updatedTodoList = todoList.filter((e, itemIndex) => {
      return itemIndex !== id;
    });
    setTodoList(updatedTodoList)
  }


  return (
    <div className='container'>

      <div className="form" >
        <Form todoSubmitted={todoSubmitted} />
      </div>
      <div className='list'>


        {
          todoList.map((todo, index) => {
            return (
              <List todo={todo} key={index} id={index} deleteTodo={deleteTodo} />
            )
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
