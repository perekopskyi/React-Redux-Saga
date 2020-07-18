import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([payload]) };
    case FETCH_POSTS:
      return { ...state, fetchedPosts: payload };
    default:
      return state;
  }
};
