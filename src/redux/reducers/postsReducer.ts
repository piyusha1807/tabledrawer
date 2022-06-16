import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILED,
} from "../constants/postsConstants";

const postInitialState = {
  data: [],
  loading: false,
  error: null,
};

export const postsReducer = (
  state = postInitialState,
  { type, payload }: any
) => {
  switch (type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case POSTS_FAILED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return state;
  }
};
