import type ICity from "~/interfaces/models/City";
import useFetcher from "../../utils/fetch";

export interface ICitiesMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<{ data: ICity }>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<{ data: ICity[] }>;
}

export default <ICitiesMethods>{
  get: async ({ id, params }) => useFetcher().get(`/cities/${id}`, params),
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/cities`, params, headers),
};
