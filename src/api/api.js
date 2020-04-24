import Axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const authEndPoint = "auth/me";
const profileEndPoint = "profile/";

const instance = Axios.create({
  baseURL,
  withCredentials: true,
});

export const authApi = () => {
  return instance.get(authEndPoint).then((response) => response);
};

export const clientsAPI = {
  getPage(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response);
  },
  getClientById(userId) {
    return instance.get(profileEndPoint + userId).then((response) => response);
  },
};
