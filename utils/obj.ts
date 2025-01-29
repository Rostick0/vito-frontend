export const generateObjFromArr = <T, K>(
  arr: K[],
  callback: (value: K, index: number, array: K[]) => [keyof T, T[keyof T]]
) => {
  const obj = {} as T;

  arr?.forEach(function (...args) {
    const [key, value] = callback(...args);

    obj[key] = value;
  });

  return obj;
};
