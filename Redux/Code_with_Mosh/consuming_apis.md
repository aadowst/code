_The Approach_

func middleware allows actions to dispatch functions (like api calls), which allows the reducer to remain pure
Code with side effects should live in the action creators

```js
// template
const actionCreator = () => (dispatch) => {
	// call api
	// resolved:  dispatch(success)  // the response from the api would be in the action.payload.message
	// rejected:  dispatch(error) // the type would be error and the error message would be in action.payload.message
}
```

_API Middleware_

There are many API calls with the above structure, it gets pretty repetitive
Intead, a middleware can be used to detect the type of the dispatch and run the appropriate code it is an api

```js
// store/middleware/api.js
import axios from "axios";

const api = (store) => (next) => async (action) => {
  if (action.type !== "apiCallBegan") return next(action);
  next(action);  //call next(), so apiCallBegan can be logged before the promise is resolved/rejected
  const { dispatch } = store;
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api", //should be stored in a config file in real api
      url,
      method,
      data,
    });
    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: "onError", payload: error });
  }
};

export default api;
```

_Actions_

In the previous code, we hard coded "apiCallBegan" in both index.js and middleware/api.js
To simplify, create store/api.js, import createAction from the redux toolkit, then export the action objects needed
In middleware/api.js, import the actions. Then update the conditional to check for the action.type
in index.js, import the actions. Then dispatch to the store, passing in the action with the appropriate payload as a parameter

Note: the middleware will handle general onSuccess and onError events, so they do not need to be included in the payload

```js
// store/api.js
import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan")
export const apiCallSuccess = createAction("api/callSuccess")
export const apiCallFailed = createAction("api/callFailed")


// store/middleware/api.js
import axios from "axios";
import * as actions from '../api'

const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  next(action);  //call next(), so apiCallBegan can be logged before the promise is resolved/rejected
  const { dispatch } = store;
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api", //should be stored in a config file in real api
      url,
      method,
      data,
    });
    dispatch(actions.apiCallSuccess(response.data)) // General onSuccess (no onSuccess specified)
    if(onSuccess) dispatch({ type: onSuccess, payload: response.data });  // Specific onSuccess
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message))  // General onError action (no error action specified)
    if (onError) dispatch({ type: onError, payload: error.message }); // Error action specified in payload
  }
};
export default api;

// index.js
import configureStore from "./store/configureStore.js";
import * as actions from './store/api'
const store = configureStore();
store.dispatch(actions.apiCallBegan( {
	url: '/bugs',
	onSuccess: 'bugsReceived'
}))
```

_Restructuring the Store_

It may be useful to display a spinner when an api call is made and to store the datetime of the last fetch. Once the bugs slice is converted to an object, the reducers need to be updated to access the bugs.list property

```js
// store/bugs.js

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
		bugAssignedToUser: (bugs, action) => {
			const index = bugs.list.findIndex((bug) => bug.id === action.payload.bugId)
			bugs.list[index].assignedTo = action.payload.userId
		}
    //code omitted
  }})
```

_Getting Data from the Server_

Since index.js is focused on the UI layer, it is better for it to invoke an action-creating function in the bugs slice, which can then do the api call, populate the store, etc.

```js
// store/bugs.js
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload
    }
    // other reducers
 }
});

export const { bugAdded, bugResolved, bugAssignedToUser, bugsReceived } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bugs"
export const loadBugs = () => apiCallBegan({
	url,  // could be stored in a config file
	onSuccess: bugsReceived.type,
})

// Selectors to follow

// index.js
import configureStore from "./store/configureStore.js";
import { loadBugs } from "./store/bugs";

const store = configureStore();
store.dispatch(loadBugs())
store.dispatch({type: "error", payload: { message: "an error has occured"}})
```

_Loading Indicators_

When loading is true, a spinner should be shown. After api call is resolved, loading should be false and spinner should be hidden

Steps:
1. action:  bugsRequested
2. reducer:  add a new reducer that sets loading = true
3. middleware:  dispatch new action before making api call
4. middleware:  move the call to next(action) after the onStart, so it shows up in a logical order
4. reducer:  in the bugsReceived reducer, set loading back to false
5. reducer:  add a bugsRequestFailed reducer, which also sets loading to false

```js
// store/bugs.js
// other code above
// reducers
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload
      bugs.loading = false;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
  }
    // other code omitted
    // Action Creators
  const url = "/bugs"
  export const loadBugs = () => apiCallBegan({
    url,  // could be stored in a config file, 
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type
  })
```

_Cacheing_

To limit the frequency of api calls, set the bugs.lastFetch to Date.now()
Then convert the loadBugs from returning the action creator to returning a function (which will eventually call the action creator)
Destructure lastFetch from getState() call
Install moment using npm
import moment
In the loadBugs action creator, call moment and access its .diff() method, passing in the lastFetch moment and the unit of measurement

```js
// store/bugs.js

// Action Creators
const url = "/bugs"
export const loadBugs = () => (dispatch, getState) => {
  const {lastFetch} = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes') 
  if(diffInMinutes < 10) return  // ideally, the time would be set in a config file and the value imported here
  dispatch(apiCallBegan({
    url,
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type
  }))
}
```

_Saving Data to Server_

1. Dispatch API call and let middleware handle it
2. Promise resolved => dispatch(success)
3. Promise rejected => dispatch(error)

Add an action creator that invokes apiCallBegan and pass in an object with the url, method, data and onSuccess action
Then modify the bugAdded reducer to use the payload data

```js
// store/bugs.js
// a lot of code omitted
// Reducers:
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
//Action Creators
export const addBug = (bug) => apiCallBegan({
  url,
  method: "post",
  data: bug,
  onSuccess: bugAdded.type,
})
```

_Reducing Coupling_

In tightly coupled software, changing the internals of a module will require a lot of bug fixes in other modules. 
This can be avoided by not exposing the implementation details of a module to files than import it
Using redux, the UI layer should only be able to dispatch command actions (e.g. addBug). The event actions (bugAdded) should stay in the slice of the store and not be exported
In other words, the UI layer (index.js), should only have access to command actions and selectors

_Cohesion_

Cohesion is a way to reduce coupling. The principle states highly related code should be kept together. 