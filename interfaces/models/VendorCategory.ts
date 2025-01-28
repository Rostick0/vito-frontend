export interface IVendorCategory {
  id: number;
  vendor_id: number;
  category_id: number;
  image?: IImageRel;
  category?: ICategory;
  vendor?: IVendor;
}
