import { EnumItem, EnumArrayAsObject } from './types';

export function asObject (arrayOfObjects: EnumItem[]) : EnumArrayAsObject{
  const result : EnumArrayAsObject = {}

  // let result: EnumArrayAsObject = <EnumArrayAsObject> {}
  arrayOfObjects.forEach((item) => {
    result[item.id] = result.id
  })
  return result
}