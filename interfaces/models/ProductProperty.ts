export interface IProductProperty {
  id: number;
  value?: number;
  property_id: number;
  property_value_id: number;
  product_id: number;
  is_specified: boolean;
  property?: IProperty;
  propertyValue?: IPropertyValue;
}
