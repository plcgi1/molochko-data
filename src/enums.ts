export const BCRYPT_SALT: number = 12;

export enum SYSTEM_USER_ROLES_ENUM {
  user = 'user',
  admin = 'admin',
  root = 'root',
}

export enum USER_STATUSES_ENUM {
  waiting = 'waiting',
  ready = 'ready',
  blocked = 'blocked',
  deleted = 'deleted',
}

export enum ORG_TYPE_ENUM {
  org = 'org',
  location = 'location',
}

export enum TOKEN_TYPE_ENUM {
  confirm = 'confirm',
  auth = 'auth',
  refresh = 'refresh',
  resetPassword = 'resetPassword',
  invite = 'invite',
}

// TODO удалить - перенесено в animal
export enum ANIMAL_GENDER_ENUM {
  cow = 'cow',
  bull = 'bull',
}

// перевод,
// аборт,
// проверка стельности,
// выбытие,
// осеменение,
// брак,
// обрезка копыт,

// TODO removeme
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

export enum SEED_TYPE_ENUM {
  traditional = 'traditional', // Традиционное
  sexytelka = 'sexytelka', // Сексированное телка
  sexybull = 'sexybull', // Сексированное бычок
  meat = 'meat', // Мясное
  meatSexyTelka = 'meatSexyTelka', // Мясное сексированное телка
  meatSexyBull = 'meatSexyBull', // Мясное сексированное бычок
}

export enum SEED_STATUS_ENUM {
  active = 'active',
  notActive = 'notActive',
}

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

// TODO удалить - перенесено в animal
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
// TODO удалить - перенесено в animal
export enum BULL_STATUS {
  SOLD = 'sold',
  BULL = 'bull',
  DIED = 'died',
}
// TODO удалить - перенесено в animal
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

// TODO removeme
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

export enum COMMON_SIMPLE_STATUS_ENUM {
  failed = 'failed',
  success = 'success',
}

export enum TAG_TYPE_ENUM {
  user = 'user',
  system = 'system',
  event = 'event',
}

export enum USER_PERMISSION_ENUM {
  view = 'view',
  create = 'create',
  update = 'update',
  delete = 'delete',
  deleteAll = 'deleteAll',
  attach = 'attach',
  detach = 'detach',
}

export enum USER_PERMISSION_METHOD_ENUM {
  post = 'post',
  put = 'put',
  delete = 'delete',
  get = 'get',
  patch = 'patch',
}

export enum ACCESS_ENUM {
  read = 'read',
  write = 'write',
}

// TODO removeme
export enum TRANSFEROUT_TYPES_ENUM {
  transferOut = 'transferOut',
  died = 'died',
}

// TODO removeme
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

// TODO removeme
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
// TODO removeme
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

// TODO removeme
export enum EVENT_EXEC_STATUS_ENUM {
  waiting = 'waiting',
  done = 'done',
  cancel = 'cancel',
  block = 'block',
}

// TODO removeme
export enum CLIST_NUMBER_OPERATOR_ENUM {
  eq = 'eq',
  gte = 'gte',
  lte = 'lte',
  lt = 'lt',
  gt = 'gt',
}
// TODO removeme
export enum CLIST_STRING_OPERATOR_ENUM {
  eq = 'eq',
  consists = 'consists',
}
// TODO removeme
export enum CLIST_DATE_OPERATOR_ENUM {
  eq = 'eq',
  between = 'between',
}
// TODO removeme
export enum CLIST_TYPE_ENUM {
  string = 'string',
  number = 'number',
  date = 'date',
}
// TODO removeme
export enum CLIST_CONDITION_ENUM {
  and = 'and',
  or = 'or',
  not = 'not',
}
// TODO removeme
export enum CLIST_DATASOURCE_ENUM {
  animals = 'animals',
  events = 'events',
  seedBank = 'seedBank',
  employee = 'employee',
  org = 'org',
  protocol = 'protocol',
  treatment = 'treatment',
}
// TODO removeme
export enum CLIST_STATUS_ENUM {
  working = 'working',
  published = 'published',
}
// TODO removeme
export enum CLIST_AFUNCTIONS_ENUM {
  count = 'count',
  min = 'min',
  max = 'max',
  avg = 'avg',
  sum = 'sum',
}

export enum SUPPORTED_LANG_ENUM {
  ru = 'ru',
  en = 'en',
}
