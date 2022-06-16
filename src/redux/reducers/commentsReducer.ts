import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILED,
} from "../constants/commentsConstants";

const commentsInitialState = {
  data: [],
  loading: false,
  error: null,
};

export const commentsReducer = (
  state = commentsInitialState,
  { type, payload }: any
) => {
  switch (type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case COMMENTS_FAILED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return state;
  }
};
