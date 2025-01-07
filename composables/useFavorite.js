export const useFavoriteInit = () => {
  const cookieFavoriteProductIds = useCookie("favoriteProductIds", {
    maxAge: 60 * 60 * 24 * 30,
    default: () => [],
  });
  const favoriteProductIds = useState(
    "favoriteProductIds",
    () => cookieFavoriteProductIds.value
  );

  watch(
    () => favoriteProductIds.value,
    (cur) => (cookieFavoriteProductIds.value = cur)
  );

  return {
    favoriteProductIds,
    cookieFavoriteProductIds,
  };
};

export default () => {
  const favoriteProductIds = useState("favoriteProductIds", () => []);

  const favoriteProductIsExists = (productId) =>
    favoriteProductIds.value.find((item) => item === productId);

  const favoriteProductToggle = (productId) => {
    const findedId = favoriteProductIsExists(productId);

    if (findedId) {
      const ids = [...favoriteProductIds.value];
      ids.splice(
        favoriteProductIds.value.findIndex((item) => item === findedId),
        1
      );
      favoriteProductIds.value = ids;
      return;
    }

    favoriteProductIds.value = [...favoriteProductIds.value, productId];
  };

  return {
    favoriteProductIds,
    favoriteProductIsExists,
    favoriteProductToggle,
  };
};
