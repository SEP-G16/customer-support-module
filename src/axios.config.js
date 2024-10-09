import axios from "axios";

let baseUrl = "http://34.171.120.235";

export const AxiosInstance = axios.create({
  baseURL: baseUrl,
});



