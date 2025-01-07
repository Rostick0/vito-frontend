import type IAppointment from "~/interfaces/models/Appointment";
import useFetcher from "../../utils/fetch";
import type IPagination from "~/interfaces/Pagination";

export interface IAppointmentsMethods {
  get: ({
    id,
    params,
  }: {
    id: number | string;
    params?: any;
  }) => Promise<{ data: IAppointment }>;
  getAll: (
    { params }: { params: any },
    header?: any
  ) => Promise<IPagination<IAppointment>>;
}

export default <IAppointmentsMethods>{
  get: async ({ id, params }) =>
    useFetcher().get(`/appointments/${id}`, params),
  getAll: async ({ params }, headers) =>
    useFetcher().get(`/appointments`, params, headers),
};
