import appointments from "./modules/appointments";
import cities from "./modules/cities";
import clinics from "./modules/clinics";
import emailCode from "./modules/emailCode";
import favorites from "./modules/favorites";
import regions from "./modules/regions";
import serviceCategories from "./modules/serviceCategories";
import services from "./modules/services";
import users from "./modules/users";

interface apiMethods {
  get?: ({ id, params }: { id: number | string; params?: any }) => Promise<any>;
  getAll?: ({ params }: { params: any }) => Promise<any>;
  create?: ({ data }: { data: any }) => Promise<any>;
  update?: ({
    id,
    data,
    params,
  }: {
    id: number | string;
    data: any;
    params?: any;
  }) => Promise<any>;
  delete?: ({ id, params }: { id: number; params?: any }) => Promise<any>;
}

const api = {
  appointments,
  cities,
  clinics,
  regions,
  emailCode,
  favorites,
  serviceCategories,
  services,
  users,
};

type apiNames = keyof typeof api;

export { api as default, type apiNames, type apiMethods };
