import { createAction } from "redux-actions";
import axios from "axios";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerRequest = createAction(REGISTER_REQUEST);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFailure = createAction(REGISTER_FAILURE);
export const registerUser = user => {
  return dispatch => {
    dispatch(registerRequest());
    return axios
      .post("/auth/signup", {
        user: user
      })
      .then(response => {
        dispatch(registerSuccess());
      })
      .catch(err => {
        dispatch(registerFailure());
      });
  };
};
