import { handleActions } from "redux-actions";
import {
  registerRequest,
  registerFailure,
  registerSuccess,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from "../actions/registerActions";
import {} from "redux-immutable";
import Immutable from "immutable";
const reducers = {
  [REGISTER_REQUEST]: (state, action) => {},
  [REGISTER_SUCCESS]: (state, action) => {},
  [REGISTER_FAILURE]: (state, action) => {}
};
export default handleActions(reducers, Immutable.Map());
