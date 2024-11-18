import axios from "axios";
import { CookieValueTypes, getCookie } from "cookies-next";

let token: CookieValueTypes;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAxiosInstance = async () => {
  try {
    token = getCookie("USER_ACCESS_TOKEN");
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,

      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    instance.interceptors.request.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    return instance;
  }
};

export const swrFetcher = async (endpoint: string) => {
  const api = await getAxiosInstance();
  const response = api.get(endpoint);
  return response;
};
