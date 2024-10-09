import {enumToObject} from "../helpers";

export enum CLIST_NUMBER_OPERATOR_ENUM {
    eq = 'eq',
    gte = 'gte',
    lte = 'lte',
    lt = 'lt',
    gt = 'gt',
}

export const CLIST_NUMBER_OPERATOR_ENUM_AS_OBJECT = enumToObject(CLIST_NUMBER_OPERATOR_ENUM);

export enum CLIST_STRING_OPERATOR_ENUM {
    eq = 'eq',
    consists = 'consists',
}

export const CLIST_STRING_OPERATOR_ENUM_AS_OBJECT = enumToObject(CLIST_STRING_OPERATOR_ENUM);

export enum CLIST_DATE_OPERATOR_ENUM {
    eq = 'eq',
    between = 'between',
}

export const CLIST_DATE_OPERATOR_ENUM_AS_OBJECT = enumToObject(CLIST_DATE_OPERATOR_ENUM);

export enum CLIST_TYPE_ENUM {
    string = 'string',
    number = 'number',
    date = 'date',
}

export const CLIST_TYPE_ENUM_AS_OBJECT = enumToObject(CLIST_TYPE_ENUM);

export enum CLIST_CONDITION_ENUM {
    and = 'and',
    or = 'or',
    not = 'not',
}

export const CLIST_CONDITION_ENUM_AS_OBJECT = enumToObject(CLIST_CONDITION_ENUM);

export enum CLIST_MODELS_ENUM {
    animals = 'animals',
    events = 'events',
    seedBank = 'seedBank',
    employee = 'employee',
    org = 'org',
    protocol = 'protocol',
    treatment = 'treatment',
}

export const CLIST_MODELS_ENUM_AS_OBJECT = enumToObject(CLIST_MODELS_ENUM);

export enum CLIST_DATASOURCE_ENUM {
    animals = 'animals',
    events = 'events',
}

export const CLIST_DATASOURCE_ENUM_AS_OBJECT = enumToObject(CLIST_DATASOURCE_ENUM);

export enum CLIST_STATUS_ENUM {
    working = 'working',
    published = 'published',
}

export const CLIST_STATUS_ENUM_AS_OBJECT = enumToObject(CLIST_STATUS_ENUM);

export enum CLIST_AFUNCTIONS_ENUM {
    count = 'count',
    min = 'min',
    max = 'max',
    avg = 'avg',
    sum = 'sum',
}

export const CLIST_AFUNCTIONS_ENUM_AS_OBJECT = enumToObject(CLIST_AFUNCTIONS_ENUM);
