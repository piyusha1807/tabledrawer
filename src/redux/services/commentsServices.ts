import axios from "../../utils/axios";

export function getComments(postId: number) {
  return axios.getRequest(`/posts/${postId}/comments`);
}
