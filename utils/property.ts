export const getPropertyLabel = (property: IProperty) =>
  property?.name + (property?.unit ? ` (${property?.unit})` : "");

export const getPropertyOptions = (property: IProperty) =>
  property?.productProperties?.map((item) => ({
    ...item,
    value: item?.value ?? item?.propertyValue?.value,
  }));
