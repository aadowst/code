_Automated Testing_

Writing code to test code. Doesn't replace manual testing.

3 Types:
Unit:  testing app w/o external dependencies (provide mock data, when necessary)
Integration:  include the external dependencies
end-to-end:  give the most confidence, but are slowest and most fragile

In this course, focus only on unit testing
A unit can be one or multiple objects. Unit testing can be done frequently and fast

_Setting Up Testing Environment_

Add dependencies and set up babel.config.json in root project directory
In src file, add math.spec.js
Set up tests, following format:  it("name of test", () => { //code of test})
Local installation? Run "npm test" in terminal
Global installation? type "jest" in terminal
Jest can be set up to watch for changes in the source code and run automatically when it detects them:  "jest --watch"

_First Unit Test_

In src folder, create math.js
Write the functions that will be tested here
Then import them into the math.spec.js file
In the code block, set up a call to the function and provide the expected result for jest to compare
Names for test should be descriptive, referencing the name of the function, and the expected results when given various parameters
Tests can be combined in groups, using the describe function

```js
// math.js
export const isEven = number => number % 2 === 0;

// math.spec.js
import { isEven } from "./math";

describe("isEven", ()=>{
	it("should return true if given an even number", () => {
		const result = isEven(2)
		expect(result).toEqual(true)
	})
	it("should return false if given an odd number", () => {
		const result = isEven(3)
		expect(result).toEqual(false)
	})
})
```

_Unit Testing Redux Apps_

Solitary tests test individual building blocks in isolation (e.g. actions vs. reducer vs. middleware)
These tests can get coupled to implementation, so if implementation is changed, they can fail. This has to be double-checked, wasting time. Also, they aren't that reliable, because they test things in such isolation
Instead, unit tests should test the behavior of the unit

To test a redux application, we should look to see how the store is affected by actions (not what is happening w/ specific middleware, reducers, etc.)
Perform social tests, where building blocks are combined together
Social tests are less fragile, cheaper to write/maintain, and are more reliable
Solitary tests are fine, if the units are already complex

_Social Tests_

An example of a Social test would be testing an action creator inconjunction with the middleware and reducer.
Make sure all middleware return the next(action) method call

```js
// bugs.spec.js
import { addBug } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  it("should handle addBug action", async () => {
    const store = configureStore(); // store object has all middleware, but we don't care about those specifics
    const bug = { description: "a" };
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toHaveLength(1);  // store object should have the 1 bug we dispatched
  });
});

// logger.js (an example of a middleware)
const logger = param => store => next => action => {  
	console.log("logging", param);
	return next(action)  // use the return keyword
}
export default logger
```

_Mocking HTTP Calls_

Unit tests shouldn't involve external resources, because calling those resources takes longer and might not be avaiable at the time of the test (leading to a failed test)
To avoid dealing with external resources, create mock objects

_Writing Clean Tests_

Use AAA format:
	Arrange:  contains initialization code
	Act: contains code for triggering action
	Assert:  contains expectation code

If there is code that will be repeated at the start of each test (like instantiating fakeAxios and the store), use beforeEach() mehtod, which is built into jest. It will run the code you specify before each test. Note, declare variables outside the scope of the function, so they can be accessed elsewhere

It may also be helpful to write helper functions to avoid repeated code (like calling the getState method of the store for each test)

```js
// src/store/tests/bugs.spec.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addBug } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore(); // store object has all middleware, but we don't care about those specifics
  });

  const bugsSlice = () => store.getState().entities.bugs; // helper function, which likely will be used numerous times

  it("should add bug to the store if it's saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug); // fakeAxios replies with a success code and returns the savedBug object
    // Act
    await store.dispatch(addBug(bug));
    // Assert
    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add bug to the store if it's not saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    fakeAxios.onPost("/bugs").reply(500); // fakeAxios replies with an error code
    // Act
    await store.dispatch(addBug(bug));
    // Assert
    expect(bugsSlice().list).toHaveLength(0);
  });
});
```

_Test Coverage_

Jest gives a report of the amount of the code that's been covered by a test:  jest --coverage
This generates a coverage folder in the root project directory
Open the index.html file to see what parts of code are covered (or not!)

