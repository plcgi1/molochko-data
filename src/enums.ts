import { EnumItem } from "./types";
import { asObject, enumToObject } from "./helpers";

export const BCRYPT_SALT: number = 12;

export enum SYSTEM_USER_ROLES_ENUM {
  user = "user",
  admin = "admin",
  root = "root"
}

export const SYSTEM_USER_ROLES_AS_OBJECT = enumToObject(SYSTEM_USER_ROLES_ENUM);

export enum USER_STATUSES_ENUM {
  waiting = 'waiting',
  ready = 'ready',
  blocked = 'blocked',
  deleted = 'deleted'
}

export const USER_STATUSES_AS_OBJECT = enumToObject(USER_STATUSES_ENUM);

export enum ORG_TYPE_ENUM {
  org = 'org',
  location = 'location',
}

export const ORG_TYPE_AS_OBJECT = enumToObject(ORG_TYPE_ENUM)

export enum TOKEN_TYPE_ENUM {
  confirm = 'confirm',
  auth = 'auth',
  refresh = 'refresh',
  resetPassword = 'resetPassword',
  invite = 'invite'
}

export const TOKEN_TYPES_AS_OBJECT = enumToObject(TOKEN_TYPE_ENUM);

export enum ANIMAL_GENDER_ENUM {
  cow = 'cow',
  bull = 'bull'
}

export const ANIMAL_GENDER_AS_OBJECT = enumToObject(ANIMAL_GENDER_ENUM);

export enum EVENT_TYPES_ENUM {
  otel = 'otel', // ОТЕЛ
  recheck = 'recheck', // ПЕРЕПРОВЕРИТЬ *
  ohota = 'ohota', // ОХОТА
  osemenenie = 'osemenenie', // ОСЕМЕНЕНИЕ *
  stelnaya = 'stelnaya', // СТЕЛЬНАЯ
  yalovaya = 'yalovaya', // ЯЛОВАЯ (НЕ СТЕЛЬНАЯ)
  stelneotpos = 'stelneotpos', // СТЕЛЬНАЯ НЕ ОТ ПОС ОСЕМЕНЕНИЯ
  perevod = 'perevod', // ПЕРЕВОД
  kbiku = 'kbiku', // КБЫКУ
  suhostoi = 'suhostoi', //'СУХОСТОЙ
  abort = 'abort', // АБОРТ
  neosem = 'neosem', // НЕОСЕМ (БРАК) *
  prodazha = 'prodazha', // ПРОДАЖА
  pala = 'pala', // ПАЛА
  zamenaNomera = 'zamenaNomera', // ЗАМЕНА НОМЕРА
  obrKopit = 'obrKopit', // ОБРАБОТКА КОПЫТ
  pozSuhostoi = 'pozSuhostoi', // ПОЗСУХОСТОЙ
  ves = 'ves', // ВЕС
  rost = 'rost', // РОСТ
  upitannost = 'upitannost', // УПИТАННОСТЬ
  zaboi = 'zaboi', // ЗАБОЙ
  sinchronizatsia = 'sinchronizatsia', // СИНХРОНИЗАЦИЯ
}

export const EVENT_TYPES_AS_OBJECT = enumToObject(EVENT_TYPES_ENUM);

export enum SEED_TYPE_ENUM {
  traditional = 'traditional', // Традиционное
  sexytelka = 'sexytelka', // Сексированное телка
  sexybull = 'sexybull', // Сексированное бычок
  meat = 'meat', // Мясное
  meatSexyTelka = 'meatSexyTelka', // Мясное сексированное телка
  meatSexyBull = 'meatSexyBull', // Мясное сексированное бычок
}

export const SEED_TYPE_AS_OBJECT = enumToObject(SEED_TYPE_ENUM);

export enum SEED_STATUS_ENUM {
  active = 'active',
  notActive = 'notActive'
}

export const SEED_STATUS_AS_OBJECT = enumToObject(SEED_STATUS_ENUM);

export enum SEED_CODES_ENUM {
  DOUBLE_OVSYNC = 'doubleOvsync',
  PRESYNC = 'dresync',
  RESYNC = 'resync',
  OVSYNC = 'ovsync',
  HEAT = 'heat',
  ACTIVITY_SENSOR = 'activitySensor',
  PRID_DELTA = 'PRIDDelta',
  G6G = 'G6G',
}

export const SEED_CODES_AS_OBJECT = enumToObject(SEED_CODES_ENUM);

export enum ANIMAL_STATUS_ENUM {
  heifer = 'heifer', // Телка
  bred = 'bred', // Осемененная
  pregnant = 'pregnant', // Стельная
  open = 'open', // Яловая
  fresh = 'fresh', // Новотельная
  dry = 'dry', // Сухостой
  dnb = 'dnb', // Брак
  sold = 'sold', // Продана
  died = 'died' // Сдохла
}

export const ANIMAL_STATUS_AS_OBJECT = enumToObject(ANIMAL_STATUS_ENUM);

// heifer, bred, open, fresh
export enum EVENT_ERROR_REASON_ENUM {
  statusNotAllowed = 'animal-status-not-allowed',
  statusNotAllowedPregnant = 'animal-status-not-allowed-pregnant',
  statusNotAllowedDry = 'animal-status-not-allowed-dry',
  statusNotAllowedDnb = 'animal-status-not-allowed-dnb',
  statusNotAllowedSold = 'animal-status-not-allowed-sold',
  statusNotAllowedDied = 'animal-status-not-allowed-died',
  statusNotAllowedBred = 'animal-status-not-allowed-bred',
  statusNotAllowedFresh = 'animal-status-not-allowed-fresh',
  statusNotAllowedHeifer = 'animal-status-not-allowed-heifer',
  statusNotAllowedOpen = 'animal-status-not-allowed-open',
  statusForFirstRecheckBredOnly = 'animal-status-for-first-recheck-bred-only',
  notACow = 'animal-not-a-cow',
  tooYoung = 'animal-too-young'
}

export const EVENT_ERROR_REASON_AS_OBJECT = enumToObject(EVENT_ERROR_REASON_ENUM);

export enum COMMON_SIMPLE_STATUS_ENUM {
  failed = 'failed',
  success = 'success'
}

export const COMMON_SIMPLE_STATUS_AS_OBJECT = enumToObject(COMMON_SIMPLE_STATUS_ENUM);

export enum TAG_TYPE_ENUM {
  user = 'user',
  system = 'system',
  event = 'event'
}

export const TAG_TYPE_AS_OBJECT = enumToObject(TAG_TYPE_ENUM);

export enum USER_ACTIONS_ENUM {
  view = 'view',
  create = 'create',
  update = 'update',
  delete = 'delete'
}

export const USER_ACTIONS_AS_OBJECT = enumToObject(USER_ACTIONS_ENUM);
