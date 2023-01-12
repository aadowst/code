_Introduction_
Middleware is the code that allows us to run side effects (like calling APIs). It is run after the action is dispatched, but before it reaches the reducer
Middleware could first, log the dispatch, and then check the authorization, before sending it to the reducer

_Creating Middleware_

Add a middleware folder in the store
Create a file for each piece of middleware
middleware has 3 parameters:
store: the relevant slice
next: next middleware to be run or to the reducer if it is the last
action: what was dispatched
However, we use Currying to convert the middleware into a chain of functions that each take one parameter
Configure the store to incorporate the middleware as part of an array as an (optional) second argument

```js
// logger.js
const logger = store => next => action => {
	console.log("store", store);
	console.log("next", next);
	console.log("action", action);
	next(action)
}
export default logger

// configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";

export default function () {
  return configureStore({ reducer,
  middleware: [logger] });
}
```

_Parameterizing Middleware_
If we want to pass along parameters to our middleware (ex. distinguishing between a development server and a projection server, an additional level of currying is required)

```js
// logger.js
const logger = param => store => next => action => {
	console.log("logging", param);
	next(action)
}
export default logger
// configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
export default function () {
  return configureStore({ reducer,
  middleware: [logger({destination: "console"})] });  // this parameter gets passed to the logger
}
```

_Dispatching Functions_

Actions that are dispatched must be plain objects that have a type property
If we want to dispatch a function (perhaps we call an API and we want the resolution of the promise to dispatch something)

The store can dispatch a function, if we use a middleware that checks the type of action. Make sure to add the middleware to the configureStore.js, in the desired order

```js
// store/middleware/func.js
const func =
  ({ dispatch, getState }) =>  // object destructuring the store object that gets passed when store.dispatch is called by index.js
  (next) =>
  (action) => {
        if (typeof action === "function") action( dispatch, getState ); // if it is a function, call it, passing along the references
    else next(action); // otherwise, pass it to the next middleware/the reducer
  };
export default func;

// store/configureStore.js
// import statements here
const store = configureStore();
store.dispatch(( dispatch, getState ) => {
  dispatch({type: 'bugsReceived', bugs: [1,2,3]})  // Modeling resolving an API call being resolved
  console.log(getState())
})

```

Redux Toolkit includes Thunk, which is built in middleware that replicates the func.js middleware written above. In order to use it, import it in configureStore.js and call the function as shown below

```js
// configureStore.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";

export default function () {
  return configureStore({ reducer,
  middleware: [
    ...getDefaultMiddleware(),  logger({destination: "console"})] });
}
```
