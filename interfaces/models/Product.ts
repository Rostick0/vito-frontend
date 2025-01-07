export interface IProduct {
  id: number;
  name: string;
  price: number;
  is_show: boolean;
  category_id: number;
  created_at: Date;
  main_image: IImage;
}
