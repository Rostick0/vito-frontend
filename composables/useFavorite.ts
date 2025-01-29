export default () => {
  const favoriteAdvertisementIds = useState("favoriteAdvertisementIds", () => new Map());
  type typeId = string | number;

  const favoriteAdd = (id: typeId) => favoriteAdvertisementIds.value.set(id, true);

  const favoriteHas = (id: typeId) => favoriteAdvertisementIds.value.has(id);

  // (favoriteAdvertisementIds.value[id] = true);
  const favoriteRemove = (id: typeId) => favoriteAdvertisementIds.value.delete(id);

  const favoriteToggle = (id: typeId) =>
    favoriteHas(id) ? favoriteRemove(id) : favoriteAdd(id);

  return {
    favoriteAdvertisementIds,
    favoriteAdd,
    favoriteHas,
    favoriteRemove,
    favoriteToggle,
  };
};
