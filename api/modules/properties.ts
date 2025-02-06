import useFetcher from "../../utils/fetch";

export interface IPropertyMethods {
  getAll: ({ params }?: { params?: any }, header?: any) => Promise<IProperty[]>;
}

export default <IPropertyMethods>{
  getAll: async ({ params = {} } = {}, headers) =>
    useFetcher().get(`/properties`, params, headers),
};
