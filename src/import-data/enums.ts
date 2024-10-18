import { enumToObject } from '../helpers';

export enum IMPDATA_SOURCES_ENUM {
  dc = 'dc',
}

export const IMPDATA_SOURCES_ENUM_AS_OBJECT = enumToObject(IMPDATA_SOURCES_ENUM);
