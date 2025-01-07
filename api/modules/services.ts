import useFetcher from "../../utils/fetch";

export interface IServicesMethods {
  getAll: ({ params }: { params: any }, headers?: any) => Promise<any>;
}

export default <IServicesMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/services`, params, headers),
};
