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

export const api_logout = async () =>
  await axios.get(`${url}/logout`, { withCredentials: true });

// user
export const api_check_login = async () =>
  await axios.get(`${url}/check`, { withCredentials: true });

export const api_patch_user = async (webtoon_id) =>
  await axios.patch(
    `${url}/user/bookmark`,
    { webtoon_id },
    { withCredentials: true }
  );
