import configureStore from "./store/configureStore.js";
import {
  getUnresolvedBugs,
  bugAdded,
  bugResolved,
  getBugsAssignedTo,
  bugAssignedToUser,
} from "./store/bugs";
import * as projectActions from "./store/projects";
import { userAdded } from "./store/users.js";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(userAdded({ name: "Adrian" }));
store.dispatch(userAdded({ name: "Bob" }));
store.dispatch(projectActions.projectAdded({ description: "Project 1" }));
store.dispatch(bugAdded({ description: "bug1" }));
store.dispatch(bugAdded({ description: "bug2" }));
store.dispatch(bugAdded({ description: "bug3" }));
store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}))
store.dispatch(bugResolved({ id: 1 }));

const bugsAssignedToUser1 = getBugsAssignedTo(1)(store.getState())
console.log(bugsAssignedToUser1)

const unresolvedBugs = getUnresolvedBugs(store.getState());

