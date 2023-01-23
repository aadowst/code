import axios from "axios";
import * as actions from '../api'

const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  
  const { dispatch } = store;
  const { url, method, data, onSuccess, onError, onStart } = action.payload;
  if(onStart) dispatch( { type: onStart})
  next(action);  //call next(), so apiCallBegan can be logged before the promise is resolved/rejected

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api", //should be stored in a config file in real api
      url,
      method,
      data,
    });
    // General onSuccess (no onSuccess specified)
    dispatch(actions.apiCallSuccess(response.data))
    // Specific onSuccess
    if(onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General onError action (no error action specified)
    dispatch(actions.apiCallFailed(error.message))
    // Error action specified in payload
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
