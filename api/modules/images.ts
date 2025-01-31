import useFetcher from "../../utils/fetch";

export interface IImageMethods {
  create: ({ data }: { data: FormData }) => Promise<IImage & IErrorData>;
}

export default <IImageMethods>{
  create: async ({ data }) => useFetcher().post(`/images/upload`, data),
};
