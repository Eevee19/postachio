import * as types from "../constants/actionTypes";

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
    case types.CREATE_POST:
      return {
        ...state,
      };
    case types.AUTHENTICATE:
      return {
        ...state,
      };
    case types.LOAD_POSTS:
      return {
        ...state,
      };
  }
};

export default postsReducer;
