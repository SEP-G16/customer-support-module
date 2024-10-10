import axios from "axios";

let baseUrl = process.env.REACT_APP_BASEurl || "http://localhost:3000"; // Default to localhost in development

export const AxiosInstance = axios.create({
  baseURL: baseUrl,
});