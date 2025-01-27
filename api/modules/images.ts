import useFetcher from "../../utils/fetch";

export interface IImageMethods {
  create: ({ data }: { data: FormData }) => Promise<IImage | IErrorData>;
  // delete: ({
  //   clinic_id,
  //   params,
  // }: {
  //   clinic_id: number;
  //   params?: any;
  // }) => Promise<{ message: string }>;
}

export default <IImageMethods>{
  create: async ({ data }) => useFetcher().post(`/images/upload`, data),
  // delete: async ({ clinic_id, params }) =>
  // useFetcher().delete(`/favorites/${clinic_id}`, params),
};
