import axios from "axios";
const apiUrl = "https://gamefinity-api.herokuapp.com";

export const apiCall = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

apiCall.interceptors.response.use(
  (response) => response,
  (error) =>
    error.response.status === 401 ? console.log(error) : Promise.reject(error)
);
