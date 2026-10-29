export enum EVENT_ERROR_REASON_ENUM {
  animalMustBeACow = 'animal-must-be-a-cow',
  animalTooYoung = 'animal-too-young',
  animalInsemenatedAtEventDate = 'animal-insemenated-at-event-date',
  animalInVWPForEventDate = 'animal-in-VWP-for-event-date',
  animalInDryForEventDate = 'animal-in-dry-for-event-date',
  eventsBeforeShouldBeInsemOrRecheck = 'event-before-shouldbe-osem-or-recheck',
  tooEarlyToRecheckAfterInsemenation = 'too-early-to-recheck-after-insemenation',

  recheckMustbeBefore = 'recheck-must-be-before',
  recheckMustbePregnant = 'recheck-must-be-pregnant',
  tooEarlyToDry = 'too-early-to-dry',
  noDryAfterFirstInsemenation = 'no-dry-after-first-insemenation',

  dryMustBeBefore = 'dry-must-be-before',
  tooEarlyLateToDry = 'too-early-to-late-dry',
  noLateDryAfterFirstInsemenation = 'no-late-dry-after-first-insemenation',

  lateDryMustBeBeforeCalving = 'late-dry-must-be-before-calving',
  dryMustBeBeforeLateDryForCalving = 'dry-must-be-before-late-dry-for-calving',
  animalNotInCalvingPeriod = 'animal-not-in-calving-period',
  statusNotAllowed = 'animal-status-not-allowed',
}

export enum EVENT_GROUPS {
  lifecycle = 'lifecycle',
  veterinary = 'veterinary',
  outOfPlan = 'outOfPlan',
}

export enum EVENT_EXEC_STATUS_ENUM {
  waiting = 'waiting',
  done = 'done',
  cancel = 'cancel',
  block = 'block',
}

export enum TRANSFEROUT_TYPES_ENUM {
  transferOut = 'transferOut',
  died = 'died',
}

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

export enum EVENT_TYPES_ENUM {
  calving = 'calving', // ОТЕЛ ----- addTocalendar
  recheck = 'recheck', // ПЕРЕПРОВЕРИТЬ * ----- addTocalendar
  ohota = 'ohota', // ОХОТА ----- addTocalendar
  insemenation = 'insemenation', // ОСЕМЕНЕНИЕ *
  perevod = 'perevod', // ПЕРЕВОД
  suhostoi = 'suhostoi', //'СУХОСТОЙ ----- addTocalendar
  abort = 'abort', // АБОРТ
  neosem = 'neosem', // НЕОСЕМ (БРАК) *
  prodazha = 'prodazha', // ПРОДАЖА ----- addTocalendar
  // pala = 'pala', // ПАЛА ----- addTocalendar
  // obrKopit = 'obrKopit', // ОБРАБОТКА КОПЫТ
  pozSuhostoi = 'pozSuhostoi', // ПОЗСУХОСТОЙ
  biometry = 'biometry',
  // sinchronizatsia = 'sinchronizatsia', // СИНХРОНИЗАЦИЯ
  transferOut = 'transferOut', // выбытие
  treatment = 'treatment', // лечение

  retagging = 'retagging', // перебирковка
  changeGroup = 'changeGroup', // смена группы
}

export const EVENT_BY_GROUPS = {
  [EVENT_GROUPS.lifecycle]: [
    EVENT_TYPES_ENUM.ohota,
    EVENT_TYPES_ENUM.insemenation,
    EVENT_TYPES_ENUM.recheck,
    EVENT_TYPES_ENUM.suhostoi,
    EVENT_TYPES_ENUM.pozSuhostoi,
    EVENT_TYPES_ENUM.abort,
    EVENT_TYPES_ENUM.neosem,
    EVENT_TYPES_ENUM.calving,
  ],
  [EVENT_GROUPS.veterinary]: [EVENT_TYPES_ENUM.treatment],
  [EVENT_GROUPS.outOfPlan]: [
    EVENT_TYPES_ENUM.biometry,
    EVENT_TYPES_ENUM.transferOut, // выбытие
    EVENT_TYPES_ENUM.retagging,
    EVENT_TYPES_ENUM.changeGroup,
  ],
};

export enum TRANSFER_REASON_CATEGORY_ENUM {
  repro = 'repro', // репродукция
  health = 'health', // здоровье
  prod = 'prod', // продуктивность
  young = 'young', // молодняк
  org = 'org', // организационные
}

// Standard reasons of perevod / changeGroup events, labelled on the frontend by code
export enum TRANSFER_REASON_CODE_ENUM {
  dryoff = 'dryoff', // запуск
  closeup = 'closeup', // подготовка к отёлу
  calved = 'calved', // после отёла
  freshEnd = 'freshEnd', // окончание новотельного периода
  sync = 'sync', // синхронизация / осеменение
  treat = 'treat', // лечение
  lame = 'lame', // хромота / обработка копыт
  withdraw = 'withdraw', // молоко в отбраковку (каренция)
  recover = 'recover', // выздоровление
  quarantine = 'quarantine', // карантин
  yield = 'yield', // по уровню удоя
  ration = 'ration', // смена рациона
  wean = 'wean', // отъём телят
  heifer = 'heifer', // нетель в дойное стадо
  site = 'site', // перевод на другую площадку
  reorg = 'reorg', // переформирование групп
  space = 'space', // нехватка мест
  other = 'other', // другое (нужен комментарий)
}

export const TRANSFER_REASON_CODE_CATEGORY: Record<
  TRANSFER_REASON_CODE_ENUM,
  TRANSFER_REASON_CATEGORY_ENUM
> = {
  [TRANSFER_REASON_CODE_ENUM.dryoff]: TRANSFER_REASON_CATEGORY_ENUM.repro,
  [TRANSFER_REASON_CODE_ENUM.closeup]: TRANSFER_REASON_CATEGORY_ENUM.repro,
  [TRANSFER_REASON_CODE_ENUM.calved]: TRANSFER_REASON_CATEGORY_ENUM.repro,
  [TRANSFER_REASON_CODE_ENUM.freshEnd]: TRANSFER_REASON_CATEGORY_ENUM.repro,
  [TRANSFER_REASON_CODE_ENUM.sync]: TRANSFER_REASON_CATEGORY_ENUM.repro,
  [TRANSFER_REASON_CODE_ENUM.treat]: TRANSFER_REASON_CATEGORY_ENUM.health,
  [TRANSFER_REASON_CODE_ENUM.lame]: TRANSFER_REASON_CATEGORY_ENUM.health,
  [TRANSFER_REASON_CODE_ENUM.withdraw]: TRANSFER_REASON_CATEGORY_ENUM.health,
  [TRANSFER_REASON_CODE_ENUM.recover]: TRANSFER_REASON_CATEGORY_ENUM.health,
  [TRANSFER_REASON_CODE_ENUM.quarantine]: TRANSFER_REASON_CATEGORY_ENUM.health,
  [TRANSFER_REASON_CODE_ENUM.yield]: TRANSFER_REASON_CATEGORY_ENUM.prod,
  [TRANSFER_REASON_CODE_ENUM.ration]: TRANSFER_REASON_CATEGORY_ENUM.prod,
  [TRANSFER_REASON_CODE_ENUM.wean]: TRANSFER_REASON_CATEGORY_ENUM.young,
  [TRANSFER_REASON_CODE_ENUM.heifer]: TRANSFER_REASON_CATEGORY_ENUM.young,
  [TRANSFER_REASON_CODE_ENUM.site]: TRANSFER_REASON_CATEGORY_ENUM.org,
  [TRANSFER_REASON_CODE_ENUM.reorg]: TRANSFER_REASON_CATEGORY_ENUM.org,
  [TRANSFER_REASON_CODE_ENUM.space]: TRANSFER_REASON_CATEGORY_ENUM.org,
  [TRANSFER_REASON_CODE_ENUM.other]: TRANSFER_REASON_CATEGORY_ENUM.org,
};
