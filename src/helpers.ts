import { EnumItem, EnumArrayAsObject } from "./types";

export function asObject(arrayOfObjects: EnumItem[]): EnumArrayAsObject {
  const result: EnumArrayAsObject = {};

  arrayOfObjects.forEach((item) => {
    result[item.id] = item.id;
  });

  return result;
}
