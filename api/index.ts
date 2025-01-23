import cities from "./modules/cities";
import emailCode from "./modules/emailCode";
import favorites from "./modules/favorites";
import products from "./modules/products";
import users from "./modules/users";
import vendors from "./modules/vendors";

const api = {
  cities,
  emailCode,
  favorites,
  products,
  users,
  vendors,
};

type apiNames = keyof typeof api;

export { api as default, type apiNames };
