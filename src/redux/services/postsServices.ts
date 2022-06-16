import axios from "../../utils/axios";

export function getPosts() {
  return axios.getRequest("/posts");
}
