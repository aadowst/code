import configureStore from "./store/configureStore.js";
import { disp} from "./store/bugs";
import { userAdded } from "./store/users.js";
import * as actions from './store/api'

const store = configureStore();
// UI Layer

store.dispatch(loadBugs())

setTimeout(( ) => store.dispatch(assignBugToUser(1,4)),2000)

console.log("made a change")
