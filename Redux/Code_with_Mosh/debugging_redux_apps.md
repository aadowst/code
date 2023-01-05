_Install Redux DevTools_

Install Rex DevTools in Chrome
Option 1:  right click in Chrome and launch Redux DevTools
Option 2:  when creating the store object in store.js, pass the following expression (to check for existence of DevTools and call it). Then access it through Chrome DevTools

```js
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // see below for a replacement, if devToolsEnhancer is installed
);
```

_The Basics_

Click on the Actions tab
Select Inspector
If "Autoselect Instances" is displayed in the bar at the top, select your project instead
If you don't see anything, right click and select reload
In the inspector, the lists of actions and their relative timestamps is on the left
On the right there are the following tabs:
	action:  the action that was sent to the store, which can be displayed multiple ways
	state:  the state after the action
	diff:  the change in the state


_Debugging Flowchart_

If you notice a bug, check the following
1. Check list of actions, to make sure right action was dispatched (if not, make sure the action calls the dispatch method)
2. Check action tab, to make sure the action was carrying the right data (if not, modify actionCreator)
3. Check State and/or tabs, to make sure the state was updated properly (if not, check the reducer function)

_Tracing_

The trace tab allows us to see what code dispatched the action
Enable it by:
in terminal: npm i redux-devtools-extension
in store.js: 
	import { devToolsEnhancer } from "redux-devtools-extension";
	call devToolsEnhancer({trace: true}) as a 2nd argument in createStore()
in webpack.config.js, add:  devtool: "source-map"
in terminal: ctrl + c
in terminal: npm start
in the Trace tab:  double-click on an action
choose the External editor
	give it a name
	add absolute path (hint:  in VSCode, right click on the directory to get its path)
Close dialog
Reload the page
now, when you click on an action in trace, it'll take you to the line in vscode


_Importing and Exporting Store_

In bottom corner, click on the 'download' button to save actions as a json file to computer
Saved states/actions can be imported by opening the json file