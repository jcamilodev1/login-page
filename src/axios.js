import axios from "axios";

axios.interceptors.request.use(function (config) {
  const authToken = localStorage.getItem('token') ?? '' ; // Aquí debes proporcionar el valor del auth-token
  
  config.headers['auth-token'] = authToken;

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});