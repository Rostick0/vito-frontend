import useFetcher from "../../utils/fetch";

export interface IPropertyMethods {
  getAll: ({ params }?: { params?: any }, header?: any) => Promise<IProperty[]>;
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

export default <IPropertyMethods>{
  getAll: async ({ params = {} } = {}, headers) =>
    useFetcher().get(`/properties`, params, headers),
  // create: async ({ data }) => useFetcher().post(`/favorites`, data),
  // delete: async ({ clinic_id, params }) =>
  // useFetcher().delete(`/favorites/${clinic_id}`, params),
};
