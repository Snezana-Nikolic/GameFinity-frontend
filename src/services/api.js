import axios from "axios";
const apiUrl = "https://gamefinity-api.herokuapp.com";

export const apiCall = axios.create({
  baseURL: apiUrl,
});
