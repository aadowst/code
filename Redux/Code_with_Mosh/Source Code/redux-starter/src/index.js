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

store.dispatch(( dispatch, getState ) => {
  // Call an API
  // If promise is resolved
  dispatch({type: 'bugsReceived', bugs: [1,2,3]})
  console.log(getState())
})

store.dispatch({type: "error", payload: { message: "an error has occured"}})
