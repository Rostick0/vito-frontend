export interface IAdvertisementDefect {
  id: number;
  defect_id: number;
  advertisement_id: number;
  defect?: IDefect;
  advertisement?: IAdvertisement;
}
