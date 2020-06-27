import * as types from "./constants/actionTypes";

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
