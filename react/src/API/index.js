import axios from "axios";

export const url = "http://localhost:3001";

export const api_get_data = async (url) => await axios.get(url);

export const api_get_data_by_category = async (route, page, category) => {
  await axios.get(`${url}/${route}?page=${page}&category=${category}`);
};

// auth
export const api_signup = async (input) =>
  await axios.post(`${url}/signup`, input);

export const api_login = async (input) =>
  await axios.post(`${url}/login`, input, { withCredentials: true });

export const api_logout = async (input) =>
  await axios.post(`${url}/logout`, { withCredentials: true });
