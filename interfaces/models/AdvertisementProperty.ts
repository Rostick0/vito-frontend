export interface IAdvertisementProperty {
  id: number;
  product_property_id: number;
  advertisement_id: number;
  productProperty?: IProductProperty;
  advertisement?: IAdvertisement;
}
