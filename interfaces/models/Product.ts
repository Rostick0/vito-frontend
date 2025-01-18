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

export interface IPropertyType {
  id: number;
  name: string;
}

export interface IPropertyValue {
  id: number;
  value: string;
  property_value_id: number;
}

export interface IProperty {
  id: number;
  name: string;
  type: string;
  unit: string;
  property_type_id: number;
}

export interface IProductProperty {
  id: number;
  value?: number;
  property_id: number;
  property_value_id?: number;
  product_id: number;
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
