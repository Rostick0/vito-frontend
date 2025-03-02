export type markType = 1 | 2 | 3 | 4 | 5;

export interface IReview {
  id: number;
  mark: markType;
  text: string;
  reviewtable_id: number;
  reviewtable_type: string;
  user_id: number;
  created_at: Date;
  user?: IUser;
}

export interface IReviewCreate {
  mark: markType;
  text: string;
  reviewtable_id: number;
  reviewtable_type: "app\\models\\Product";
}

export interface IReviewUpdate {
  mark: markType;
  text: string;
}

export interface IReviewMarks {
  count: number;
  mark: number;
}
