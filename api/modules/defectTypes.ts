import useFetcher from "../../utils/fetch";

export interface IDefectTypeMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<IDefectType[]>;
}

export default <IDefectTypeMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/defect-types`, params, headers),
};
