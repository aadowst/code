import configureStore from "./store/configureStore.js";
import * as actions from "./store/bugs";
import * as projectActions from "./store/projects"

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(projectActions.projectAdded({description: "Project 1"}))

// store.dispatch(actions.bugAdded({ description: "bug1" }));
// store.dispatch(actions.bugAdded({ description: "bug2" }));
// store.dispatch(actions.bugAdded({ description: "bug3" }));
// store.dispatch(actions.bugResolved({id: 1}));
console.log(store.getState());
