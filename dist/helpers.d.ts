import { EnumItem, EnumArrayAsObject } from './types';
export declare function asObject(arrayOfObjects: EnumItem[]): EnumArrayAsObject;
export declare function enumToObject(e: object): {
    [key: string]: string;
};
