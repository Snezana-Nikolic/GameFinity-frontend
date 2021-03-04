import axios from "axios";
const apiUrl = "http://gamefinity-api.herokuapp.com";

export const apiCall= axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" , "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiR2lvcm5vIiwicGFzc3dvcmQiOiIxYWFkZmVhNzMxNjVlNTgxMTg4NDUxZDc5Mzk3N2E3MGI0YTRhYjYwZWU1MGQyYWMyZDM1YjgxNWMxODg2Zjc1In0sImlhdCI6MTYxNDcyNTI0MywiZXhwIjoxNjE0NzM2MDQzfQ.Ewq1VzpAkOECLXcDjJzS6WpsV4EXQrLKuPPMQBxlJ0s'}
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





