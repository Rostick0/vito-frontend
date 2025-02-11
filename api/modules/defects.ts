import useFetcher from "../../utils/fetch";

export interface IDefectMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<IDefect[]>;
}

export default <IDefectMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/defects`, params, headers),
};
