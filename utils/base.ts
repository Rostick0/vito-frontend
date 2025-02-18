import { useToast } from "vue-toastification";
import isObject from "lodash/isObject";
import groupBy from "lodash/groupBy";

const toast = useToast();

export const warningPopup = (message: string = "Упс, что-то пошло не так!") => {
  try {
    toast.error(message, {
      timeout: 2000,
    });
  } catch (error) {
    console.error("warningPopup", error);
  }
};

export interface IErrorData {
  error: boolean;
  isError: boolean;
  message: string;
  errorResponse: any;
  popup: () => void;
}
export function getErrorData(error: any, aborted?: any): IErrorData | void {
  try {
    if (aborted) {
      return;
    }
    let errorMessage = `${
      error?.data?.errors?.message ??
      error?.message ??
      `Что то пошло не так: ${error}`
    }`;

    if (error?.data?.errors?.messages) {
      for (let message in error?.data?.errors?.messages) {
        errorMessage += ": " + error?.data?.errors?.messages[message];
      }
    }

    if (isObject(error?.data?.errors)) {
      for (let message in error?.data?.errors) {
        errorMessage += ": " + error?.data?.errors[message];
      }
    }

    const popup = () =>
      toast.error(errorMessage, {
        timeout: 2000,
      });

    return {
      error: true,
      isError: true,
      message: errorMessage,
      errorResponse: error,
      popup: popup,
    };
  } catch (error) {
    console.error("notify", error);
  }
}

export const notify = (error: string) => {
  try {
    // let errorMessage = `${
    //   error?.data?.errors?.message ??
    //   error?.message ??
    //   `Что то пошло не так: ${error}`
    // }`;
    // if (error?.data?.errors?.messages) {
    //   for (let message in error?.data?.errors?.messages) {
    //     errorMessage += ": " + error?.data?.errors?.messages[message];
    //   }
    // }
    // toast.error(errorMessage);
    toast.error(error);
  } catch (error) {
    console.error("notify", error);
  }
};

export const success = (message: string = "Данные успешно сохранены") => {
  try {
    toast.success(message, {
      timeout: 2000,
    });
  } catch (error) {
    console.error(error);
  }
};

export const convertValuesToString = (obj: object) => {
  const result: Record<string, string> = {};

  Object.keys(obj).forEach((k) => {
    result[k] = String(obj[k as keyof typeof obj]);
  });

  return result;
};

export const transliterate = (text: string): string => {
  const cyrillicToLatin = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  return text
    .split("")
    .map((char) => cyrillicToLatin?.[char] ?? char)
    .join("");
};

export const transliterateHref = (str: string) =>
  transliterate(str)?.replace(/ /g, "-");

export const convertNamePath = (name: string) =>
  encodeURIComponent(transliterateHref(name)).toLowerCase();

export const getLinkAdvertisement = (
  city: string,
  advertisement: IAdvertisement
): string =>
  `/${encodeURIComponent(city)}/${encodeURIComponent(
    transliterateHref(advertisement?.title)
  )}/${advertisement?.id}`.toLowerCase();

export const getPropertyValWithUnit = (value?: number, unit?: string) =>
  value && (unit ? `${value} ${unit}` : value);

export const getPropertyValue = (productProperty: IProductProperty) => {
  if (productProperty?.property?.type === "checkbox")
    return productProperty?.value ? "Есть" : "Нет";

  return (
    productProperty?.propertyValue?.value ??
    getPropertyValWithUnit(
      productProperty?.value,
      productProperty?.property?.unit
    )
  );
};

export const groupByInArray = (array: Array<any>, name: string) => {
  const group = groupBy(array, name);

  return Object.keys(group).map((el) => ({
    group: el,
    value: group[el],
  }));
};

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

export const toArrayObject = (
  obj: Record<string, any>,
  callback = (key: string, index: number, array: string[]): object => ({
    name: key,
    value: obj[key],
  })
) => Object.keys(obj).map(callback);

export const convertToExpand = (expands: string[]) => expands.join(",");

export const getColorRaiting = (value: number, type: "bg" | "text") => {
  const colors = [
    `${type}-green-500`,
    `${type}-yellow-400`,
    `${type}-orange-500`,
    `${type}-red-500`,
    `${type}-red-700`,
  ];

  if (value > 4.4) return colors[0];

  if (value > 3.8) return colors[1];

  if (value > 3.2) return colors[2];

  if (value > 2.8) return colors[3];

  return colors[4];
};
