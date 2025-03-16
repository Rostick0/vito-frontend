import useFetcher from "../../utils/fetch";

interface IMyReviewParams {
  params: {
    reviewtable_id: number;
    reviewtable_type: string;
  };
}

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
  getMarks: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<IReviewMarks[]>;
  getMy: ({ params }: IMyReviewParams) => Promise<IReviewMarks>;
}

export default <IReviewMethods>{
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/reviews`, params, headers),
  delete: async ({ id, params }) =>
    useFetcher().delete(`/reviews/${id}`, params),
  create: async ({ data }) => useFetcher().post(`/reviews`, data),
  update: async ({ id, data, params }) =>
    useFetcher().patch(`/reviews/${id}`, data, params),
  getMarks: async ({ id, params }) =>
    useFetcher().get(`/reviews/marks/${id}`, params),
  getMy: async ({ params }) => useFetcher().get(`/reviews/my`, params),
};
