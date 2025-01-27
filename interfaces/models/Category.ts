import type { IImageRel } from "./ImageRel";

export interface ICategory {
  id: number;
  name: string;
  category_id?: number;
  imageRel?: IImageRel;
}
