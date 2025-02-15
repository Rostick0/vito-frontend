import useFetcher from "../../utils/fetch";

export interface ICategoryMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<ICategory[]>;
}

export default <ICategoryMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/categories`, params, headers),
};
