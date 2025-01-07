export const formatNumber = (val?: number | string) =>
  new Number(val)?.toLocaleString?.("ru-RU");
