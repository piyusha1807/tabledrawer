import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILED,
} from "../constants/postsConstants";
import { getPosts } from "../services/postsServices";

export const fetchPosts = () => async (dispatch: any) => {
  try {
    dispatch({ type: POSTS_REQUEST });

    const payload = await getPosts();

    dispatch({ type: POSTS_SUCCESS, payload });
  } catch (error) {
    dispatch({
      type: POSTS_FAILED,
      payload: error,
    });
  }
};
