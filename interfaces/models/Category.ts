export interface ICategory {
  id: number;
  name: string;
  category_id?: number;
  image?: IImageRel;
  categories?: ICategory[];
  categoriesCount?: number;
}
