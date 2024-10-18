import { enumToObject } from '../helpers';

export enum IMPDATA_SOURCES_ENUM {
  dc = 'dc',
}

export const IMPDATA_SOURCES_ENUM_AS_OBJECT = enumToObject(IMPDATA_SOURCES_ENUM);

export enum IMPDATA_STATUS_ENUM {
  working = 'working',
  ready = 'ready',
  error = 'error'
}

export const IMPDATA_STATUS_ENUM_AS_OBJECT = enumToObject(IMPDATA_STATUS_ENUM);
