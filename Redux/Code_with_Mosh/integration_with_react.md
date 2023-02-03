_Creating React App_
Create react app:  npx create-react-app DIRECTORY_NAME
cd into directory
in terminal:  npm start

_Installing Redux_

Copy code from course folder to react project
install redux and associated dependencies:  npm i redux @reduxjs/toolkit axios moment

_Providing the Store_

Note:  the instructions for manually providind the store are below only as a reference. Skip to the next section (using React-Redux)

Setting up store and providing it as context to components:
1. Add components folder to src
2. Create a class component (eg. Bugs.jsx)
3. Delete everything inside the return statement in App.js
4. Add the class component w/in the return statement
5. Connect the component to the store:
	a. import configureStore from the configureStore module
	b. call the function and set it equal to an object
6. Use context to give access to the store (rather than prop drilling
	a. Add context folder to src
	b. Create a storeContext.js file
	c. import createContext function from react
	d. call the function and save the result
	e. default export the StoreContext object
	f. import the Store context in app.js
9. Wrap all components with the provider property of the StoreContext object
10. pass the store as the value for the provider object.
11. Add the store as a static property of the component class

```js
// App.js
import './App.css';
import Bugs from './components/Bugs';
import configureStore  from './store/configureStore'
import StoreContext from './contexts/storeContext'

const store = configureStore()
function App() {
  return (
    <StoreContext.Provider value = {store}>
      <Bugs/>
    </StoreContext.Provider>
  );
}
export default App;

// components/Bugs.jsx
import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';

class Bugs extends Component {
	static contextType = StoreContext
	componentDidMount(){
		console.log(this.context);
	}
	render() {
		return (
			<div> Bugs </div>
		);
	}
}

// contexts/storeContext.js
import { createContext } from "react";
const StoreContext = createContext()
export default StoreContext

```

Manually Subscribing and Dispatching
1. In class component, set the initial state (empty array)
2. in componentDidMount method call:
	a. instantiate a store object
	b. call the subsribe() method of the store and save its return (which is the unsubscribe function) as a property of the class object
	c. in the subscribe callback, set a const equal to the appropriate property getState() call  (e.g. store.getState().entities.bugs.list)
	d. set a conditional that will update the state if the state component doesn't equal the bugs in the store
	e. add the loadComponent action after the subscription to the store
3. in componentWillUnMount method call, add the unsubscribe() method call


_Connecting Components Using react-redux_

install react-redux:  npm i react-redux (Mosh used @7.2)
import the Provider object from react-redux
Add a components folder and a class component (e.g. Bugs.js)
import the connect function from react-redux
In the render method's return statement, access the properties of this.props (e.g. this.props.bugs)
Create a function (mapStateToProps) that takes the state of the store and returns an object with the particular portion of the store that is needed for the component
Create another function (mapDispatchToProps) that takes the dispatch function and returns an object that can call a function from dispatch
Pass the functions created above as arguments to the connect function. Connect will return a function, so call that function, passing in the component as an argument
In App.js, wrap the components with the Provider object which has a store prop

```js
// src/components/Bugs.jsx

import React, { Component } from 'react';
import { loadBugs } from '../store/bugs';
import { connect } from 'react-redux';

class Bugs extends Component {
	componentDidMount(){  //load Bugs on mount
		this.props.loadBugs()
	}
	render() {
		return (
			<ul>{this.props.bugs.map(bug => <li key={bug.id}>{bug.description} </li>)}</ul>  // display bugs from list
		);
	}
}

const mapStateToProps = state => ({
	bugs: state.entities.bugs.list  
})
const mapDispatchToProps = dispatch => ({
	loadBugs: () => dispatch(loadBugs())  // method for calling dispatch
})
// Container component (connect) wraps Presentation component (Bugs) 
export default connect(mapStateToProps, mapDispatchToProps)(Bugs)  // monitors and manages state after mount

```

_Hooks_

A newer way to do previous code (in functional components) is to use hooks
Add a new component. Type code snippet sfc (stateless function component)
Type code snippet imr to import react
import componet to App.js and return it
Hooks:
	useEffect is similar to componentDidMount (but can be called multiple times)
	useDispatch is similar to the dispatch function
	useSelector will select the slice of the store that is needed

```js
// src/components/BugsList.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadBugs, getUnresolvedBugs } from '../store/bugs';

const BugsList = () => {
	const bugs = useSelector(getUnresolvedBugs)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(loadBugs())
	},[])
	return (
		<ul>{bugs.map(bug => <li key={bug.id}>{bug.description} </li>)}</ul>
	);
}

export default BugsList;
```