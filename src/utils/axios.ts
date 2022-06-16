import Axios from "../utils/http-utils";

export const API_ENDPOINT = "https://jsonplaceholder.typicode.com/";

const AxiosClass: any = Axios;
const AxiosInstance = new AxiosClass(API_ENDPOINT);

export default AxiosInstance;
