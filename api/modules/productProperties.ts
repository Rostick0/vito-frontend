import useFetcher from "../../utils/fetch";

export interface IProductPropertyMethods {
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<IProductProperty[]>;
  // create: ({
  //   data,
  // }: {
  //   data: {
  //     clinic_id: number;
  //   };
  // }) => Promise<{ data: IVendor }>;
  // delete: ({
  //   clinic_id,
  //   params,
  // }: {
  //   clinic_id: number;
  //   params?: any;
  // }) => Promise<{ message: string }>;
}

export default <IProductPropertyMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/product-properties`, params, headers),
  // create: async ({ data }) => useFetcher().post(`/favorites`, data),
  // delete: async ({ clinic_id, params }) =>
  // useFetcher().delete(`/favorites/${clinic_id}`, params),
};
