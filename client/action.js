import * as types from "./constants/actionTypes";
import axios from "axios";

export const usernameChange = (username) => ({
  type: types.USERNAME_CHANGE,
  payload: username,
});

export const passwordChange = (password) => ({
  type: types.PASSWORD_CHANGE,
  payload: password,
});

export const createPost = (post) => ({
  type: types.CREATE_POST,
  payload: post,
});

export const authenticate = (user) => ({
  type: types.AUTHENTICATE,
  payload: user,
});

export const loadPosts = () => ({
  type: types.LOAD_POSTS,
});

// export const loginUser = (user) => {
//   return (dispatch) => {
//     return axios.post("/login", user).then((res) => {
//       dispatch(authenticate({
//         isLoggedIn:
//       }));
//     });
//   };
// };
