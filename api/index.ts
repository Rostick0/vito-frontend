import advertisements from "./modules/advertisements";
import categories from "./modules/categories";
import defects from "./modules/defects";
import defectTypes from "./modules/defectTypes";
import cities from "./modules/cities";
import emailCode from "./modules/emailCode";
import images from "./modules/images";
import productProperties from "./modules/productProperties";
import products from "./modules/products";
import properties from "./modules/properties";
import users from "./modules/users";
import vendors from "./modules/vendors";

const api = {
  advertisements,
  categories,
  defectTypes,
  defects,
  cities,
  emailCode,
  images,
  productProperties,
  products,
  properties,
  users,
  vendors,
};

type apiNames = keyof typeof api;

export { api as default, type apiNames };
