import * as actions from './actionTypes'
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  }
  if (action.type === actions.BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

	if (action.type === actions.BUG_RESOLVED){
		return state.map(bug => bug.id === action.payload.id ? (
			{...bug, resolved: true}
		) : bug)
	}
  return state;
}

// reducer can also use switch-case

function reducerSwitchCase(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
