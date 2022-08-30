Navigate to parent folder in the Terminal
Type:  npx create-react-app MY-PROJECT NAME
Navigate into the created folder
In the terminal, type:  npm run start
In the text editor, open App.js
Delete everything inside  <div className="App">
Add a "components" folder in src
Create a .js file in the components folder (eg. SomeClassComponent) with the following structure:
```js
import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;
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