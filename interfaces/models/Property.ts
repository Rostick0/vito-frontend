type typePropertyUnit = "checkbox" | "select" | "input";

export interface IProperty {
  id: number;
  name: string;
  type: typePropertyUnit;
  unit?: string;
  property_type_id: number;
  is_filter: boolean;
  productProperties?: IProductProperty[];
  // propertyCategories?: IPropere
  propertyType?: IPropertyType;
  propertyValues?: IPropertyValue[];
}
