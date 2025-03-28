import useFetcher from "../../utils/fetch";

export interface IProductMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<IProduct>;
  getAll: ({ params }?: { params?: any }, header?: any) => Promise<IProduct[]>;
  // create: ({
  //   data,
  // }: {
  //   data: {
  //     clinic_id: number;
  //   };
  // }) => Promise<{ data: IProduct }>;
  delete: ({
    id,
    params,
  }: {
    id: number;
    params?: any;
  }) => Promise<{ message: string }>;
}

export default <IProductMethods>{
  get: async ({ id, params }) => useFetcher().get(`/products/${id}`, params),
  getAll: async ({ params = {} } = {}, headers) =>
    useFetcher().get(`/products`, params, headers),
  // create: async ({ data }) => useFetcher().post(`/products`, data),
  delete: async ({ id, params }) =>
    useFetcher().delete(`/products/${id}`, params),
};
