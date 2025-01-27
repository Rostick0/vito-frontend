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
  reviews_count?: number;
  user?: IUser;
  vendor?: IVendor;
  properties?: IProductProperty[];
}
