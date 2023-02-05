import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
    )
);

export default instance;
