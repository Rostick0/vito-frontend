import type { IReview } from "./Review";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  raiting: number;
  is_show: boolean;
  category_id: number;
  created_at: Date;
  mainImage?: IImage;
  category?: ICategory;
  images?: IImageRel[];
  user?: IUser;
  vendor?: IVendor;
  productProperties?: IProductProperty[];
  reviews?: IReview[];
  reviewsCount?: number;
}
