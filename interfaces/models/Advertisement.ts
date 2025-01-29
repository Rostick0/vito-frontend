export interface IAdvertisement {
  id: number;
  title: string;
  price: number;
  description: string;
  is_show: boolean;
  is_new: boolean;
  product_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  mainImage?: IImage;
  images?: IImageRel[];
  product?: IProduct;
  user?: IUser;
  advertisementProperties?: IAdvertisementProperty[];
  office?: IOffice;
}

export interface IAdvertisementSubmit {
  title: string;
  price: number;
  description: string;
  is_show: boolean;
  is_new: boolean;
  images: File[];
  office: IOffice;
  product: IProduct;
  vendor: IVendor;
  properties_products: IProductProperty[];
}

export interface IAdvertisementCreate {
  title: string;
  price: number;
  description: string;
  is_show: boolean;
  is_new: boolean;
  product_id: number;
  office_id: number;
  images?: string;
  properties_products: number[];
}
