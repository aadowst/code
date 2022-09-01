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

Functional component structure
```js
import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;
```
Enter JSX code to be rendered w/in the rturn

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