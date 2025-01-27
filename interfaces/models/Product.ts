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
  imageRels?: IImageRel[];
  reviews_count?: number;
  user?: IUser;
  properties?: IProductProperty[];
}
