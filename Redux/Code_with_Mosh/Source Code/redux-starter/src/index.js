import configureStore from "./store/configureStore.js";
import { } from "./store/bugs";
import { userAdded } from "./store/users.js";
import * as actions from './store/api'

const store = configureStore();
// UI Layer

store.dispatch(loadBugs())

setTimeout(( ) => store.dispatch(assignBugToUser(1,4)),2000)
