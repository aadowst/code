Navigate to parent folder in the Terminal
Type:  npx create-react-app my-project-name *(must use kebab or snake case)*
Navigate into the created folder
In the terminal, type:  npm run start
In the text editor, open App.js
Delete everything inside  <div className="App">
Add a "Components" folder in src

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