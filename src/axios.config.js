import axios from "axios";

let baseUrl = process.env.REACT_APP_BASE_URL 

export const AxiosInstance = axios.create({
  baseURL: baseUrl,
});
