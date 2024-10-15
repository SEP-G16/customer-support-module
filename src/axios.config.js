import axios from "axios";

let baseUrl = process.env.REACT_APP_BASE_URL;

// Fallback to HTTPS if in production mode
if (process.env.NODE_ENV === 'production') {
  baseUrl = baseUrl.replace('http://', 'https://');
}

if(process.env.REACT_APP_RUNTIME_MODE === 'DEPLOYMENT'){
  baseUrl = null;
}

console.log(baseUrl);

console.log(process.env.REACT_APP_RUNTIME_MODE);

export const AxiosInstance = axios.create({
  baseURL: baseUrl,
});
