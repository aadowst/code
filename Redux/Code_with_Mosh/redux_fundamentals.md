_Redux Architecture_

Application state stored in the Store, which is accessible to all parts of the apps
Data in the store cannot be directly mutated
Instead, a modified copy of the data can be made (using spread operator or an immutability library)
The function that takes in the current store and returns an updated copy is called a reducer
The action is another parameter for the reducer function, that lets it know what just happend (and thus what part of the store to update)
The store might be divided into 'slices' (e.g. users, cart, categoreis, products, etc.), each of which has a reducer that updates it

```js
function reducer(store, action){
	//update store based on action
}
```
Information flow:
Actions (aka events) occur, creating an action object, 
The action object gets dispatched to the store. 
The store then calls the appropriate reducer, forwarding along the action object. 
The reducer computes the new state
The new state is returned to the store and the relevant UI components are notified of a change
The UI components will pull out the data they need and refresh themselves

Because all actions are sent to the store, they have a common pipeline. Thus, it is easier to log and undo actions, if necessary

*Steps to Follow when Building Redux Application*
1. Design the store (i.e. what should be kept there)
2. Define the actions (i.e. what will the users be doing)
3. Create one or more reducers
4. Set up the store based on reducer(s)

*Setting up Redux*
npm i redux@4.0 (or latest version)

_Designing the Store_

Determine what to keep in the store.

_Define the Actions_

Redux expects action objects to have a key called type, the values of which can be strings or numbers (since both are serializable). Common
ly, strings are used with format "WORD1_WORD2...", but other casing can be used
the action object can have additional keys-value pairs. There are no requirements for the names/types of these key-value pairs. However, since redux is based on flux, a naming convention is used

```js
// Action object convention
{
	type: "WORD_WORD",
	payload: {
		description: "...",
		//other data
	}
}
```

_Creating a Reducer_

create a reducer.js file in src folder
maake sure to export the reducer function (ideally as a default)
Only the minimal possible information should be sent to the reducer, because the reducer should do the business logic (e.g. creating an id for an action)
Initially, the state is undefined, so it need to be created (perhaps by setting a default argument)

```js
let lastId = 0;  // simple code to generate ids for bugs
export default function reducer(state = [], action) {
  if (action.type === "bugAdded") {  //note:  if using an actionTypes.js file, these should be used here, rather than hardcoding the name (see below)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  }
  if (action.type === "bugRemoved") {
    return state.filter((bug) => bug.id !== action.payload.id);
  }
  return state;
}
```

_Creating the Store_

create a store.js file in the src folder
import createStore function from redux
import reducer function from the reducer file
declare a store object equal to calling createStore method with the reducer as an argument
export the store

```js
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store;
```

_Dispatching Actions_

in index.js, import the store object
The state of the store can be viewed by using the getState() method

_Subscribing to the Store_

call the subscribe() method, passing in a function, which gets called each time there is a dispatch. Primarily, this is used to update the UI
the subscribe method returns a function that can be used to unsubscribe to the store, so set a variable equal to the return of the function
If user navigates away from the area where the store is needed, then we can call this unsubsribe function to prevent a memory leak


```js
import store from './store.js'
import * as actions from './actionTypes'

const unsubscribe = store.subscribe(() => {
	console.log("store changed!", store.getState())
})

store.dispatch({
	type: actions.BUG_ADDED,
	payload: {
		description: "bug1"
	}
})

unsubscribe() // comment out to see both actions

store.dispatch({
	type: actions.BUG_REMOVED,
	payload:{
		id: 1
	}
})
console.log(store.getState())

```

_Improvements to Barebones Redux_

Redux itself has a very small footprint. However, it is helpful to add new building blocks, to make code more maintainable 

*Action Types*

Create a file that stores all action types that will be referenced throughout the code

actionTypes.js
```js
export const BUG_ADDED = "bugAdded"
export const BUG_REMOVED = "bugRemoved"
```

*Action Creators*

Since multiple files will likely be dispatching actions, this code should be stored someplace

create actions.js or actionCreators.js
create functions that correspond to the actions (e.g. bugAdded) and have it return the code which was previously written in the dispatch call
make sure to import the action types into this file (note:  the action types won't be needed in index.js, because it can just call the action from actions.js)
export the function and import it into index.js
in index.js, use dispatch() to call the method, passing in the relevant info

```js
// index.js
import store from './store.js'
import {bugAdded, bugRemoved} from './actions'

const unsubscribe = store.subscribe(() => {
	console.log("store changed!", store.getState())
})

store.dispatch(bugAdded("bug1")) // passing in desc of bug
store.dispatch(bugRemoved(1))  // passing in id of bug

// actions.js
import * as actions from './actionTypes'

export function bugAdded(description){
	return{
		type: actions.BUG_ADDED,
		payload: {
			description: description
		}
	}
}

// using an arrow function. Note: to return an object, it must be wrapped in parentheses
export const bugRemoved = id => ({
	type: actions.BUG_REMOVED,
	payload:{
		id: id
		}
})

//since the id is both the name of the key and the parameter, a shorthand can be used
export function bugResolved(id){
	return {
		type: actions.BUG_RESOLVED,
		payload: {
			id //here's the shorthand
		}
	}
}
```



