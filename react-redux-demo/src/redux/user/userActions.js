import axios from "axios";

import { USER_REQUEST, USER_SUCCESS, USER_FAILED, USER_ADD } from "./userTypes";

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payload: user,
  };
};

export const userFailed = (error) => {
  return {
    type: USER_FAILED,
    payload: error,
  };
};

export const userPost = (body) => {
  return {
    type: USER_ADD,
    payload: body,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const users = res.data;
        dispatch(userSuccess(users));
      })
      .catch((err) => {
        const errorMsg = err.message;
        userFailed(errorMsg);
      });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .post("https://jsonplaceholder.typicode.com/posts", user)
      .then((res) => {
        const user = res.data;
        dispatch(userPost(user));
      })
      .catch((err) => {
        const errorMsg = err.message;
        userFailed(errorMsg);
      });
  };
};
