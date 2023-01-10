_Structuring Files and Folders_

UI code should be kept separate from the state management code

Option 1:  creating directories for each feature (e.g. auth, bugs, projects) than has state management
src/
	UI/
	store/
		store.js
		feature1/
			actions.js
			actionTypes.js
			reducer.js
		feature2/
			actions.js
			actionTypes.js
			reducer.js

Option 2:  Ducks pattern(short for redux) combines the 3 js files into 1 file per feature
src/
	UI/
	store/
		auth.js
		bugs.js
		store.js

_Ducks Pattern_

Each duck is a slice of the store, corresponding to a specific feature
To create a duck from multiple files: 
	first, copy actionTypes to the duck, remove the export keyword, and then delete the original file.
	second, copy actioncreators (aka actions.js), but delete the imports and rename the types (remove "actions."). delete the original file
	third, copy the reducer (w/o the import), rename the types
	fourth, change the import statement in store.js to match the new location of the reducer
	fifth, in index.js, check the path for importing the store and the actions
	sixth, rename store.js to configureStore.js and export a function that returns an object that creates the store (see code below)
	seventh, import the function in index.js
	eighth, call the function to store it locally in the module

	```js
	// configureStore.js
	import { createStore } from "redux";
	import { devToolsEnhancer } from "redux-devtools-extension";
	import reducer from "./bugs";

	export default function configureStore(){
		const store = createStore(
			reducer,
			devToolsEnhancer({trace: true})
		);
		return store
	};

	//index.js
	import configureStore from './store/configureStore.js'
	import * as actions from './store/bugs'
	const unsubscribe = store.subscribe(() => {
		console.log("store changed!", store.getState())
})
	const store = configureStore()
	// more code follows
	```

Rules to follow using ducks pattern:

	1. The reducer needs to be a default export

	2. Export individual action creators

	3. Action types don't need to be exported (so remove export key word)

_Redux Toolkit_

Formerly known as Redux Starter kit
Install in project folder:  npm i @reduxjs/toolkit@1.2.5

_Configuring the Store_

The Redux Toolkit 'configureStore' function comes with redux devtools, so that won't need to be imported on its own
The configureStore function gets passed a configuration argument, which is an object with the reducer function

```js
// configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function () {
  return configureStore({ reducer });
}
```

_Creating Actions_

Redux toolkit has a createAction function that simplifies that code. Calling the function returns an action creator. If an argument is passed, it becomse the payload of the action creator
Using the .type property on the action creater returns its type

```js
// bugs.js
import { createAction, createReducer } from "@reduxjs/toolkit";

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// reducer
let lastId = 0

export default createReducer([], {
	[bugAdded.type]:  (bugs, action) => {
		bugs.push({
			id: ++lastId,
			description: action.payload.description,
			resolved: false,
		})
	}, 
	[bugResolved.type]: (bugs, action) => {
		const index = bugs.findIndex(bug => bug.id === action.payload.id)
		bugs[index].resolved = true;
	}
})

```

_Creating Reducers_

Redux Toolkit has its own functions for creating reducers. These don't rely on switch cases and looks like they mutate code, but under the hood, Immer is used to ensure an immutable update pattern
Import createReducer
Call the function, passing in two parameters:
	1. the initial state (an empty array)
	2. an object with many key-value pairs. The keys are types of actions and the values are functions that handle the actions. Anonymous arrow functions used

Make sure the name of the key corresponds with the argument that was passed to the createAction function (e.g. both are called bugAdded). Or, the key could be set to the .type property of the action that was created

Export the reducer as a default object

_Creating Slices_

Redux can also combine the steps of creating actions and a reducer
import createSlice
Call the function and pass in a configuration object, which contains name, initial state, reducers

createSlice makes a reducer function (export as default) and action objects (named exports)

```js
//bugs.js
import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;
```