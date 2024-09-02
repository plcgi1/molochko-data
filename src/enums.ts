import { enumToObject } from './helpers';

export const BCRYPT_SALT: number = 12;

export enum SYSTEM_USER_ROLES_ENUM {
  user = 'user',
  admin = 'admin',
  root = 'root',
}

export const SYSTEM_USER_ROLES_AS_OBJECT = enumToObject(SYSTEM_USER_ROLES_ENUM);

export enum USER_STATUSES_ENUM {
  waiting = 'waiting',
  ready = 'ready',
  blocked = 'blocked',
  deleted = 'deleted',
}

export const USER_STATUSES_AS_OBJECT = enumToObject(USER_STATUSES_ENUM);

export enum ORG_TYPE_ENUM {
  org = 'org',
  location = 'location',
}

export const ORG_TYPE_AS_OBJECT = enumToObject(ORG_TYPE_ENUM);

export enum TOKEN_TYPE_ENUM {
  confirm = 'confirm',
  auth = 'auth',
  refresh = 'refresh',
  resetPassword = 'resetPassword',
  invite = 'invite',
}

export const TOKEN_TYPES_AS_OBJECT = enumToObject(TOKEN_TYPE_ENUM);

export enum ANIMAL_GENDER_ENUM {
  cow = 'cow',
  bull = 'bull',
}

export const ANIMAL_GENDER_AS_OBJECT = enumToObject(ANIMAL_GENDER_ENUM);

// перевод,
// аборт,
// проверка стельности,
// выбытие,
// осеменение,
// брак,
// обрезка копыт,

export enum EVENT_TYPES_ENUM {
  otel = 'otel', // ОТЕЛ ----- addTocalendar
  recheck = 'recheck', // ПЕРЕПРОВЕРИТЬ * ----- addTocalendar
  ohota = 'ohota', // ОХОТА ----- addTocalendar
  osemenenie = 'osemenenie', // ОСЕМЕНЕНИЕ *
  stelnaya = 'stelnaya', // СТЕЛЬНАЯ
  yalovaya = 'yalovaya', // ЯЛОВАЯ (НЕ СТЕЛЬНАЯ) ----- addTocalendar
  stelneotpos = 'stelneotpos', // СТЕЛЬНАЯ НЕ ОТ ПОС ОСЕМЕНЕНИЯ ----- addTocalendar
  perevod = 'perevod', // ПЕРЕВОД
  kbiku = 'kbiku', // КБЫКУ ----- addTocalendar
  suhostoi = 'suhostoi', //'СУХОСТОЙ ----- addTocalendar
  abort = 'abort', // АБОРТ
  neosem = 'neosem', // НЕОСЕМ (БРАК) *
  prodazha = 'prodazha', // ПРОДАЖА ----- addTocalendar
  pala = 'pala', // ПАЛА ----- addTocalendar
  zamenaNomera = 'zamenaNomera', // ЗАМЕНА НОМЕРА ----- addTocalendar
  obrKopit = 'obrKopit', // ОБРАБОТКА КОПЫТ
  pozSuhostoi = 'pozSuhostoi', // ПОЗСУХОСТОЙ
  ves = 'ves', // ВЕС
  rost = 'rost', // РОСТ
  upitannost = 'upitannost', // УПИТАННОСТЬ
  zaboi = 'zaboi', // ЗАБОЙ
  sinchronizatsia = 'sinchronizatsia', // СИНХРОНИЗАЦИЯ
  transferOut = 'transferOut', // выбытие
  treatment = 'treatment', // лечение
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
  notActive = 'notActive',
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
  died = 'died', // Сдохла
  theft = 'theft', // Кража
  transferout = 'transferout', // выбыла
}

export enum BULL_STATUS {
  SOLD = 'sold',
  BULL = 'bull',
  DIED = 'died',
}

export enum COW_STATUS {
  HEIFER = 'heifer',
  BRED = 'bred',
  PREGNANT = 'pregnant',
  OPEN = 'open',
  FRESH = 'fresh',
  DRY = 'dry',
  DNB = 'dnb',
  SOLD = 'sold',
  DIED = 'died',
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
  tooYoung = 'animal-too-young',
}

export const EVENT_ERROR_REASON_AS_OBJECT = enumToObject(EVENT_ERROR_REASON_ENUM);

export enum COMMON_SIMPLE_STATUS_ENUM {
  failed = 'failed',
  success = 'success',
}

export const COMMON_SIMPLE_STATUS_AS_OBJECT = enumToObject(COMMON_SIMPLE_STATUS_ENUM);

export enum TAG_TYPE_ENUM {
  user = 'user',
  system = 'system',
  event = 'event',
}

export const TAG_TYPE_AS_OBJECT = enumToObject(TAG_TYPE_ENUM);

export enum USER_PERMISSION_ENUM {
  view = 'view',
  create = 'create',
  update = 'update',
  delete = 'delete',
  deleteAll = 'deleteAll',
  attach = 'attach',
  detach = 'detach',
}

export const USER_PERMISSION_AS_OBJECT = enumToObject(USER_PERMISSION_ENUM);

export enum USER_PERMISSION_METHOD_ENUM {
  post = 'post',
  put = 'put',
  delete = 'delete',
  get = 'get',
  patch = 'patch',
}

export const USER_PERMISSION_METHOD_AS_OBJECT = enumToObject(USER_PERMISSION_METHOD_ENUM);

export enum ACCESS_ENUM {
  read = 'read',
  write = 'write',
}

export const ACCESS_ENUM_AS_OBJECT = enumToObject(ACCESS_ENUM);

export enum TRANSFEROUT_TYPES_ENUM {
  transferOut = 'transferOut',
  died = 'died',
}

export const TRANSFEROUT_TYPES_AS_OBJECT = enumToObject(TRANSFEROUT_TYPES_ENUM);

export enum TRANSFEROUT_REASON_ENUM {
  leikoz = 'leikoz', // Лейкоз
  tuberkulez = 'tuberkulez', // Туберкулез
  klostirikoz = 'klostirikoz', // Клостридиоз
  nekrobacilez = 'nekrobacilez', // Некробациллез
  aktinomikoz = 'aktinomikoz', // Актиномикоз)
  ginekologic = 'ginekologic', // Гинекологические заболевания
  metabolicDisorders = 'metabolicDisorders', // Нарушения обмена веществ
  Infertility = 'infertility', // Бесплодие
  udderDiseases = 'udderDiseases', // Болезни вымени
  lameness = 'lameness', // Хромота
  breedingSales = 'breedingSales', // Племпродажа
  salesToThePublic = 'salesToThePublic', // Продажа населению
  theft = 'theft', // Кража
  dead = 'dead', // сдохла
}

export const TRANSFEROUT_REASON_AS_OBJECT = enumToObject(TRANSFEROUT_REASON_ENUM);

export enum DISEASES_ENUM {
  PREVENTION = 'prevention', // Профилактика
  VACCTINATION = 'vaccination', // Вакцинация
  MASTITIS = 'mastitis', // Мастит
  METRITIS = 'metritis', // Метрит
  PARESIS = 'paresis', // Парез
  TEMPERATURE = 'temperature', // Температура
  ABOMASUM_DISPLACEMENT = 'abomasum_displacement', // Смещение сычуга
  LAMENESS = 'lameness', // Хромота
  INJURY = 'injury', // Травма
  DEHORNING = 'dehorning', // Обезроживание
  METABOLIC_DISEASE = 'metabolic disease', // Нарушение обмена веществ
  DIARRHEA = 'diarrhea', // Диарея
  ATONY = 'atony', // Атония
  PNEUMONIA = 'pneumonia', // Пневмония
  TYMPANY = 'tympany', // Тимпания
  HEALTHY = 'healthy', // Здорова
  KETOSIS = 'ketosis', // Кетоз
  CONJUNCTEVITIS = 'conjunctevitis', // Коньюктевит
  DIPEPSIA = 'dipepsia', // Дипепсия
  SYNCHRONIZATION = 'synchronization', // Синхронизация
  OTHER = 'other', // Иное
}

export const DISEASES_AS_OBJECT = enumToObject(DISEASES_ENUM);

export enum MEDMETHOD_ENUM {
  SUBCUTANEOUSLY = 'subcutaneously', // подкожно
  NASALLY = 'nasally', // нозально
  INTRAMUSCULARLY = 'intramuscularly', // внутримышечно
  INTRACISTERNALLY = 'intracesternally', // внутрицестернально
  ORALLY = 'orally', // орально
  INTRAVENOUSLY = 'intravenously', // внутривенно
  INTRAUTERINE = 'intrauterine', // внутриматочно
  INTRAVAGINALLY = 'intravaginally', // внутривагинально
}
export const MEDMETHOD_ENUM_AS_OBJECT = enumToObject(MEDMETHOD_ENUM);

// TODO удалить
export enum SUBTASK_STATUS_ENUM {
  waiting = 'waiting',
  working = 'working',
  ready = 'ready',
  outdated = 'outdated',
}

export const SUBTASK_STATUS_AS_OBJECT = enumToObject(SUBTASK_STATUS_ENUM);

export enum EVENT_EXEC_STATUS_ENUM {
  waiting = 'waiting',
  done = 'done',
  cancel = 'cancel',
  block = 'block',
}

export const EVENT_EXEC_STATUS_AS_OBJECT = enumToObject(EVENT_EXEC_STATUS_ENUM);

export const REPORT_OPERATOR_ENUM = {
  eq: 'eq',
  gte: 'gte',
  lte: 'lte',
  lt: 'lt',
  gt: 'gt'
};

export const REPORT_OPERATOR_ENUM_AS_OBJECT = enumToObject(REPORT_OPERATOR_ENUM);

export const REPORT_TYPE_ENUM = {
  string: 'string',
  number: 'number',
  date: 'date',
  datetime: 'datetime',
};
export const REPORT_TYPE_ENUM_AS_OBJECT = enumToObject(REPORT_TYPE_ENUM);

export const REPORT_CONDITION_ENUM = {
  and: 'and',
  or: 'or',
};

export const REPORT_CONDITION_ENUM_AS_OBJECT = enumToObject(REPORT_CONDITION_ENUM);

export const REPORT_DATASOURCE_ENUM = {
	animals: 'animals',
	events: 'events',
};

export const REPORT_DATASOURCE_ENUM_AS_OBJECT = enumToObject(REPORT_DATASOURCE_ENUM);
