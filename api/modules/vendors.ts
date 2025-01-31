import useFetcher from "../../utils/fetch";

export interface IVendorMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<IVendor[]>;
  getByName: ({
    name,
    params,
  }: {
    name: string;
    params?: any;
  }) => Promise<IVendor>;
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

export default <IVendorMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/vendors`, params, headers),
  getByName: async ({ name, params }) =>
    useFetcher().get(`/vendors/name/${name}`, params),
  // create: async ({ data }) => useFetcher().post(`/vendors`, data),
  // delete: async ({ clinic_id, params }) =>
  // useFetcher().delete(`/vendors/${clinic_id}`, params),
};
