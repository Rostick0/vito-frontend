export interface IAdvertisement {
  id: number;
  title: string;
  price: number;
  description: string;
  is_show: boolean;
  product_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IAdvertisementSubmit {
  title: string;
  price: number;
  description: string;
  is_show: boolean;
  product: IProduct;
  vendor: IVendor;
  properties_products: IProductProperty[];
}

export interface IAdvertisementCreate {
  title: string;
  price: number;
  description: string;
  is_show: boolean;
  product_id: number;
}
