import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
		bugAssignedToUser: (bugs, action) => {
			const index = bugs.list.findIndex((bug) => bug.id === action.payload.id)
			bugs.list[index].assignedTo = action.payload.userId
		},
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});

const { bugAdded, bugResolved, bugAssignedToUser, bugsReceived, bugsRequested, bugsRequestFailed } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bugs"
export const loadBugs = () => (dispatch, getState) => {
  const {lastFetch} = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')  // compare the current momement with the the last fetch and return difference in minutes
  if(diffInMinutes < 10) return
  dispatch(apiCallBegan({
    url,  // could be stored in a config file, 
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type
  }))
}

export const addBug = (bug) => apiCallBegan({
  url,
  method: "post",
  data: bug,
  onSuccess: bugAdded.type,
})

export const assignBugToUser = (bugId, userId) => apiCallBegan({
  url: url + "/" + bugId,
  method: "patch",
  data: {userId},
  onSuccess:  bugAssignedToUser.type
})

export const resolveBug = (id) => apiCallBegan({
  url: url + "/" + id,
  method: "patch",
  data: {resolved: true},
  onSuccess:  bugResolved.type
})

// Not needed w/ above loadBugs code
// export const loadBugsSimple = () => apiCallBegan({
// 	url,  // could be stored in a config file, 
//   onStart: bugsRequested.type,
// 	onSuccess: bugsReceived.type,
//   onError: bugsRequestFailed.type
// })

// Selectors

export const getUnresolvedBugs = createSelector(
		state => state.entities.bugs,
		bugs => bugs.filter(bug => !bug.resolved)
	)

export const getBugsAssignedTo = userId => createSelector(
	state => state.entities.bugs,
	bugs => bugs.filter(bug => bug.assignedTo === userId)
)
//export const getBugsAssignedTo = (bugs, worker) => bugs.filter(bug => bug.assignedTo === worker)

// Code before createSlice is used

// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

// Reducer code before createReducer used

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//       );
//     default:
//       return state;
//   }
// }

//Code before Redux Toolkit used

// //Action Types
// const BUG_ADDED = "bugAdded"
// const BUG_REMOVED = "bugRemoved"
// const BUG_RESOLVED = "bugResolved"

// //Action Creators
// export function bugAdded(description) {
//   return {
//     type: BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }
// // same as above, using arrow functions
// export const bugAddedArrow = (description) => ({
// 	// note: since object is returned, it must be wrapped in parenthesis, so curly braces aren't interpreted as defining a code block
// 	type: BUG_ADDED,
// 	payload: {
// 		description: description,
// 	},
// });

// export function bugRemoved(id) {
//   return {
//     type: BUG_REMOVED,
//     payload: {
//       id: id,
//     },
//   };
// }

// export function bugResolved(id){
// 	return {
// 		type: BUG_RESOLVED,
// 		payload: {
// 			id: id
// 		}
// 	}
// }

// // Reducer
// let lastId = 0;

// export default function reducer(state = [], action) {
//   if (action.type === BUG_ADDED) {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   }
//   if (action.type === BUG_REMOVED) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   }

//   if (action.type === BUG_RESOLVED) {
//     return state.map((bug) =>
//       bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//     );
//   }
//   return state;
// }

// // reducer can also use switch-case

// function reducerSwitchCase(state = [], action) {
//   switch (action.type) {
//     case "bugAdded":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case "bugRemoved":
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case "bugResolved":
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//       );
//     default:
//       return state;
//   }
// }
