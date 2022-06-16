import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILED,
} from "../constants/commentsConstants";
import { getComments } from "../services/commentsServices";

export const fetchComments = (postId: number) => async (dispatch: any) => {
  try {
    dispatch({ type: COMMENTS_REQUEST });

    const payload = await getComments(postId);

    dispatch({ type: COMMENTS_SUCCESS, payload });
  } catch (error) {
    dispatch({
      type: COMMENTS_FAILED,
      payload: error,
    });
  }
};
