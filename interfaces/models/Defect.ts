export interface IDefect {
  id: number;
  name: string;
  defect_type_id: number;
  advertisementDefects?: IAdvertisementDefect[];
  defectType?: IDefectType;
  defectCategories?: IDefectCategory[];
}
