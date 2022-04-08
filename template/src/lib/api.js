// This is axios configuration

import axios from "axios";
// You need to change the base url (baseUrl) and and the place where
// you are saving your token: cache, localStorage, Sessions, Cookies...etc
const baseUrl = "http://127.0.0.1:5000/api";
export const axiosApi = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: ` ${
      localStorage.getItem("token")
        ? "Token " + localStorage.getItem("token")
        : null
    }`,
    },
});

export const api = {
    get: (url = "", params = {}) =>
        axiosApi.get(baseUrl + url, {
            ...params,
        }),
    post: (url = "", data, params = {}) =>
        axiosApi.post(baseUrl + url, data, {
            ...params,
        }),
    patch: (url = "", data, params = {}) =>
        axiosApi.patch(baseUrl + url, data, {
            ...params,
        }),
    delete: (url = "") => axiosApi.delete(baseUrl + url),
};