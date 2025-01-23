import useFetcher from "../../utils/fetch";

export interface IProductMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<IProduct[]>;
  // create: ({
  //   data,
  // }: {
  //   data: {
  //     clinic_id: number;
  //   };
  // }) => Promise<{ data: IProduct }>;
  // delete: ({
  //   clinic_id,
  //   params,
  // }: {
  //   clinic_id: number;
  //   params?: any;
  // }) => Promise<{ message: string }>;
}

export default <IProductMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/products`, params, headers),
  // create: async ({ data }) => useFetcher().post(`/favorites`, data),
  // delete: async ({ clinic_id, params }) =>
  // useFetcher().delete(`/favorites/${clinic_id}`, params),
};
