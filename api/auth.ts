import type { ILogin, IRegister } from "~/interfaces/models/User";
import type { RouteLocationRaw } from "vue-router";
import useFetcher from "../utils/fetch";

interface IUserResponse {
  user: IUser;
  access_token: string;
}

interface authMethods {
  login: (data: ILogin) => Promise<IUserResponse>;
  register: (data: IRegister) => Promise<IUserResponse>;
  logout: (data?: any) => Promise<any>;
  me: (...args: Array<any>) => Promise<IUserResponse>;
}

export default <authMethods>{
  login: async (data) => useFetcher().post(`/auths/login`, data),
  register: async (data) => useFetcher().post(`/auths/register`, data),
  logout: async (data = {}) => useFetcher().post(`/auths/logout`, data),
  me: async (params, headers) => useFetcher().get(`/auths/me`, params, headers),
};
