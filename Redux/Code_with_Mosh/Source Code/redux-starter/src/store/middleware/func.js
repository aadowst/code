const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch, getState); // if it is a function, call it
    } else {
      next(action); // otherwise, pass it to the next middleware/the reducer
    }
  };

export default func;
