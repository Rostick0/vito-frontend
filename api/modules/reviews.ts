import useFetcher from "../../utils/fetch";

export interface IReviewMethods {
  getAll: ({ params }: { params: any }, header?: any) => Promise<IReview[]>;
  delete: ({ id, params }: { id: number; params?: any }) => Promise<any>;
  create: ({ data }: { data: IReviewCreate }) => Promise<IReview & IErrorData>;
  update: ({
    id,
    data,
    params,
  }: {
    id: string | number;
    data: IReviewUpdate;
    params?: Record<string, any>;
  }) => Promise<IReview & IErrorData>;
}

export default <IReviewMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/reviews`, params, headers),
  delete: async ({ id, params }) => useFetcher().delete(`/users/${id}`, params),
  update: async ({ id, data, params }) =>
    useFetcher().patch(`/users/${id}`, data, params),
};
