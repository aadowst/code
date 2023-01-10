import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;

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
