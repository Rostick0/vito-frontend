export default () => {
  // console.log(useCookie())
  const favoriteProductIds = useState("favoriteProductIds", () => new Map());
  type typeId = string | number;

  const favoriteAdd = (id: typeId) => favoriteProductIds.value.set(id, true);

  const favoriteHas = (id: typeId) => favoriteProductIds.value.has(id);

  // (favoriteProductIds.value[id] = true);
  const favoriteRemove = (id: typeId) => favoriteProductIds.value.delete(id);

  const favoriteToggle = (id: typeId) =>
    favoriteHas(id) ? favoriteRemove(id) : favoriteAdd(id);

  return {
    favoriteProductIds,
    favoriteAdd,
    favoriteHas,
    favoriteRemove,
    favoriteToggle,
  };
};
