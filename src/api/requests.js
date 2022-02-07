import axios from "axios";
import qs from "qs";

export const defaultRequest = (config) => {
  const { method, url } = config;

  return axios({
    url,
    method,
  });
};

export const requestWithParams = (config, query) => {
  const { method, url } = config;

  return axios({
    url,
    method,
    params: query,
    paramsSerializer(params) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    },
  });
};
