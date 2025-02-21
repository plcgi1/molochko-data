export enum CLIST_NUMBER_OPERATOR_ENUM {
  eq = 'eq',
  gte = 'gte',
  lte = 'lte',
  lt = 'lt',
  gt = 'gt',
}

export enum CLIST_STRING_OPERATOR_ENUM {
  eq = 'eq',
  consists = 'consists',
}

export enum CLIST_DATE_OPERATOR_ENUM {
  eq = 'eq',
  between = 'between',
}

export enum CLIST_TYPE_ENUM {
  string = 'string',
  number = 'number',
  date = 'date',
}

export enum CLIST_CONDITION_ENUM {
  and = 'and',
  or = 'or',
  not = 'not',
}

export enum CLIST_MODELS_ENUM {
  animals = 'animals',
  events = 'events',
  seedBank = 'seedBank',
  employee = 'employee',
  org = 'org',
  protocol = 'protocol',
  treatment = 'treatment',
  animalMetrics = 'animalMetrics',
}

export enum CLIST_DATASOURCE_ENUM {
  animals = 'animals',
  animalMetrics = 'animalMetrics',
  seedBank = 'seedBank',
  events = 'events',
  employee = 'employee',
}

export enum CLIST_STATUS_ENUM {
  working = 'working',
  published = 'published',
}

export enum CLIST_AFUNCTIONS_ENUM {
  count = 'count',
  min = 'min',
  max = 'max',
  avg = 'avg',
  sum = 'sum',
}
