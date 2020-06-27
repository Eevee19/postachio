import * as types from "../constants/actionTypes";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  units: "",
  questionTitle: "",
  questionContent: "",
  dateCreated: "",
  resolved: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USERNAME_CHANGE:
      return {
        ...state,
        username: action.payload,
      };
    case types.PASSWORD_CHANGE:
      return {
        ...state,
        password: action.payload,
      };
    case types.AUTHENTICATE:
      // Code to handle submit.
      return {
        ...state,
        isLoggedIn: authIsLoggedIn,
      };

    case types.CREATE_POST:
      return {
        ...state,
      };
    case types.LOAD_POSTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default postsReducer;
