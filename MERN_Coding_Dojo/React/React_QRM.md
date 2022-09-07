Navigate to parent folder in the Terminal
Type:  npx create-react-app my-project-name *(must use kebab or snake case)*
Navigate into the created folder
In the terminal, type:  npm run start
In the text editor, open App.js
Delete everything inside  <div className="App">
Add a "Components" folder in src

Using axios
navigate to the project folder in the terminal and type "npm install axios"
at the top of the relevant component:  import axios from 'axios';

installing React Router
in the project folder in the terminal type:  "npm install react-router-dom"
at the top of the index.js page, import { BrowserRouter } from 'react-router-dom'
Wrap the App component with BrowserRouter tags

sample code:
```js
//other imports above
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

```

In App.js and/or component files, import {Routes, Route, Link} from 'react-router-dom';
Components can be defined w/in App.js or be their own files
in the return of function App(), include everything that should always be present to the top
Below that section, wrap Route tags with a Routes wrapper

sample code:
```js

```


<!-- Create a .js file in the components folder (eg. SomeClassComponent) with class structure:
```js
import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;
``` -->

Functional component structure with state
```js
import React, { useState } from 'react';
    
const Counter = props => {
    const [state, setState] = useState({
        clickCount: 0
    });
 
    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }
 
    return (
        <div>
            { state.clickCount }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;
```

Note: when destructuring useState, you can define your own keys. Also, you don't need to explicitly define a property like click count. Another format is as shown below.
```js
import React, { useState } from 'react';
    
const Counter = props => {
    const [count, setCount] = useState(0);
 
    const handleClick = () => {
        setCount(count + 1);
    }
 
    return (
        <div>
            { count }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;
```
Enter JSX code to be rendered w/in the return

In App.js, import the component(s) at the top and add them w/in the <div className="App">

Sample Code:
```js
import React from 'react';
import './App.css';
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  return (
    <div className="App">
        <SomeClassComponent/>
  );
}

export default App;
```

Sample code for forms with functional hooks:
```js
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
```

