import axios, { AxiosInstance } from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
};

class AxiosClass {
  Axios: AxiosInstance;

  constructor(baseURL: string) {
    this.Axios = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  getRequest(url: string, headers: any = {}) {
    return this.Axios.get(url, {
      headers: { ...defaultHeaders, ...headers },
    }).then((response) => (response?.data ? response.data : response));
  }
}

export default AxiosClass;
