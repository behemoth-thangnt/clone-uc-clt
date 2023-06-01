import axios from "axios";

const GLOBAL_TOAST_ERROR_MESSAGE =
  "エラーが発生しました。ご確認をお願い致します。";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosConfig = {
    timeout: 30000, proxyHeaders: false,
    credentials: false,
  };
  const defaultUrl = "http://localhost:3000";

  const api = axios.create({
    baseURL: defaultUrl,
    ...axiosConfig
  });

  api.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {

    // Do something with request error
    return Promise.reject(error);
  });

  api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  }, function (error) {

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  return {
    provide: {
      axios: api,
    },
  };
});

