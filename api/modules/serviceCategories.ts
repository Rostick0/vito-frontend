import useFetcher from "../../utils/fetch";

export interface IServiceCategoriesMethods {
  getAll: ({ params }: { params: any }, headers?: any) => Promise<any>;
}

export default <IServiceCategoriesMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/service-categories`, params, headers),
};
