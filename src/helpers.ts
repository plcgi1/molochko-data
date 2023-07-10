import { EnumItem, EnumArrayAsObject } from "./types";

export function asObject(arrayOfObjects: EnumItem[]): EnumArrayAsObject {
  const result: EnumArrayAsObject = {};

  arrayOfObjects.forEach((item) => {
    result[item.id] = item.id;
  });

  return result;
}

export function enumToObject(e: object): { [key: string]: string } {
  // { [key: string]: string };
  const result = Object.keys(e)
    .reduce((obj, key) => {
      // TypeScript перечисления имеют обратные свойства для обеспечения обратной совместимости
      // Проверяем, что ключ является числом и пропускаем эти ключи
      if (!isNaN(Number(key))) {
        return obj;
      }

      // @ts-ignore
      obj[key] = e[key];
      return obj;
    }, {});

  return result
}