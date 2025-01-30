import useFetcher from "../utils/fetch";

interface IUserResponse {
  user: IUser;
  access_token: string;
}

interface authMethods {
  login: (data: any) => Promise<IUserResponse>;
  register: (...args: Array<any>) => Promise<IUserResponse>;
  logout: (...args: Array<any>) => Promise<any>;
  me: (...args: Array<any>) => Promise<IUserResponse>;
}

export default <authMethods>{
  login: async (data) => useFetcher().post(`/auths/login`, data),
  register: async (data) => useFetcher().post(`/auths/register`, data),
  logout: async (data) => useFetcher().post(`/auths/logout`, data),
  me: async (params, headers) => useFetcher().get(`/auths/me`, params, headers),
};
