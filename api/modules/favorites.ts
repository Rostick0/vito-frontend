import type IFavorite from "~/interfaces/models/Favorite";
import useFetcher from "../../utils/fetch";
import type IPagination from "~/interfaces/Pagination";

export interface IFavoritesMethods {
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<IPagination<IFavorite>>;
  create: ({
    data,
  }: {
    data: {
      clinic_id: number;
    };
  }) => Promise<{ data: IFavorite }>;
  delete: ({
    clinic_id,
    params,
  }: {
    clinic_id: number;
    params?: any;
  }) => Promise<{ message: string }>;
}

export default <IFavoritesMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/favorites`, params, headers),
  create: async ({ data }) => useFetcher().post(`/favorites`, data),
  delete: async ({ clinic_id, params }) =>
    useFetcher().delete(`/favorites/${clinic_id}`, params),
};
