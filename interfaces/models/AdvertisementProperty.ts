import type { IProductProperty } from "./ProductProperty";

export interface AdvertisementProperty {
  id: number;
  product_property_id: number;
  advertisement_id: number;
  productProperty?: IProductProperty;
  advertisement?: IAdvertisement;
}
