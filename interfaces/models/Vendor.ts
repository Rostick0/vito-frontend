export interface IVendor {
  id: number;
  name: string;
  created_at: Date;
  image?: IImageRel;
  vendorCategories?: IVendorCategory[];
  products?: IProduct[];
}
