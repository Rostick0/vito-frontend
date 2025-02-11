export interface IDefectCategory {
  id: number;
  defect_id: number;
  category_id: number;
  category?: ICategory;
  defect?: IDefect;
}
