export const ROUTES_NAMES = {
  main: "/",
  login: "/login",
  favorites: "/favorites",
  notifications: "/notifications",
  advertisementAdd: "/advertisement/add",
  brands: (name: string) => `/brands/${name}`,
  product: (name: string, id: number) => `/products/${name}/${id}`,
  productReviews: (name: string, id: number) =>
    `/products/${name}/${id}/reviews`,
};
