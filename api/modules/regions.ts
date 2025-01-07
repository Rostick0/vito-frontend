import useFetcher from "../../utils/fetch";

export interface IRegionsMethods {
  getAll: ({ params }: { params: any }, headers?: any) => Promise<any>;
}

export default <IRegionsMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/regions`, params, headers),
};
