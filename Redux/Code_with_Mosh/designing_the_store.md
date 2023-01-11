_Redux State vs. Local State_

One approach is to only put global state in redux and keep other state (which isn't shared between components) local
However, since redux comes with debugging tools, these wouldn't be available to all of the application.
Putting all state into the store also allows for cacheing of data and more testable code

Exception to putting all data in the store:  form state (since it has many temp values and since these change with every key stroke, a lot of dispatches would occur)

Best Practices:
	1. using a object to store objects (instead of an array), due to its quick lookup (unless the goal is to preserve an order)


Hybrid array/object approach:
```js
{
	byId: {
		1: {...},
		2: {...},
		3: {...}
	}
	inOrder: [3,1,2]
}
```

	2. put all slices in a parent object called entities, except for auth and ui

	```js
{
	entities: { bugs: {...}, projects: {...}, ... },
	auth: {userId: 1, name: "Adrian"},
	ui: { ... }
}
	```

_Combining Reducers_

Add entities.js to the store directory
import combineReducers function from redux
import the reducers for the slices from their modules, giving them distinctive names
call the function, passing in an object that specifies the slices
export the function as a default object
add reducer.js
import entitiesReducer and all subsequent reducers (e.g. authReducer)
explort it as a default object
in configureStore, import the reducer from the reducer module

```js
// entities.js
import { combineReducers } from "redux";
import bugsReducer from './bugs'
import projectsReducer from './projects'

export default combineReducers({
	bugs: bugsReducer,
	projects: projectsReducer
})

//reducer.js
import { combineReducers } from "redux";
import entitiesReducer from './entities'

export default combineReducers({
	entities: entitiesReducer // add other top level reducer slices here
})

// configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function () {
  return configureStore({ reducer });
}

```

_Normalization_

Aim to keep data stutures as flat as possible and only store the minimal info needed (e.g. when tracking bugs, only include the projectId in the bugs slice instead of the full description)

_Selectors_

Business logic related to a slice (e.g. a query that returns all results that match certain criteria) should be stored in that slice, so it is not duplicated and is accessible to all parts of the application.
These are called selectors
They can be imported in other modules and state can be passed back to them as an argument

```js
// in bugs.js
export const getUnresolvedBugs = state =>
	state.entities.bugs.filter(bug => !bug.resolved)
```

_Memoizing Selectors_

Every time the selector is called, a new object gets returned (even if the state hasn't changed). Since the new object has a differnt address in memory, it would have to be rerendered
To avoid this, memoize the return of the selectors

Install reselect:  npm i reselect
import createSelector from reselect (might also be in reduxjs toolkit)
call createSelector, first passing in the slice of state involved and then the function that should be run on the state, if there has been a change (if there isn't a change, the memoized result will be returned)

```js
export const getUnresolvedBugs = createSelector(
		state => state.entities.bugs,
		bugs => bugs.filter(bug => !bug.resolved)
	)
```