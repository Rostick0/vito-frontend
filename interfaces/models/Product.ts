export interface IProductView {
  id: number;
  name: string;
  price: number;
  raiting: number;
  is_show: boolean;
  category_id: number;
  created_at: Date;
  main_image: IImage;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  raiting: number;
  is_show: boolean;
  category_id: number;
  created_at: Date;
  main_image: IImage;
  category?: ICategory;
  image_rels: IImageRel[];
  reviews_count?: number;
  user?: IUser;
  properties?: IProductProperty[];
}
