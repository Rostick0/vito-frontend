import useFetcher from "../../utils/fetch";

interface IUserMethods {
  get: ({ id, params }: { id: number | string; params?: any }) => Promise<IUser>;
  getAll: ({ params }: { params: any }) => Promise<IUser>;
  // update: ({
  //   id,
  //   data,
  //   params,
  // }: {
  //   id: number | string;
  //   data: any;
  //   params?: any;
  // }) => Promise<any>;
  delete: ({ id, params }: { id: number; params?: any }) => Promise<any>;
}

export default <IUserMethods>{
  get: async ({ id, params }) => useFetcher().get(`/users/${id}`, params),
  // delete: async ({ id, params }) => useFetcher().delete(`/users/${id}`, params),
  // update: async ({ id, data, params }) =>
  //   useFetcher().patch(`/users/${id}`, data, params),
  getAll: async ({ params }, headers?: any) =>
    useFetcher().get(`/users`, params, headers),
};
