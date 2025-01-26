import useFetcher from "../../utils/fetch";

export interface IAdvertisementsMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<IAdvertisement>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<IAdvertisement[]>;
  create: ({ data }: { data: IAdvertisementCreate }) => Promise<IAdvertisement>;
}

export default <IAdvertisementsMethods>{
  get: async ({ id, params }) =>
    useFetcher().get(`/advertisements/${id}`, params),
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/advertisements`, params, headers),
  create: async ({ data }) => useFetcher().post(`/advertisements`, data),
};
