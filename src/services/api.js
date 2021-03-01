import axios from "axios";
const apiUrl = "http://gamefinity-api.herokuapp.com";

export const apiCall= axios.create({
  baseURL: apiUrl
});
apiCall.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
        console.log(error)
     console.log('nije dobro')
    } else {
        return Promise.reject(error);
    }
  });

