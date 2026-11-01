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
  lifecycle = 'lifecycle', // Жизненный цикл
  veterinary = 'veterinary', // Медицина (лечение, прививки)
  movement = 'movement', // Перемещения
  other = 'other', // Другие
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

/** @deprecated Use DISPOSAL_REASON_CODE_ENUM; kept for events stored before the disposal reason dictionary. */
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

/**
 * The group of every event type. A Record, so a new EVENT_TYPES_ENUM value without a group
 * does not compile. Key order sets the order inside EVENT_BY_GROUPS lists.
 */
export const EVENT_GROUP_BY_TYPE: Record<EVENT_TYPES_ENUM, EVENT_GROUPS> = {
  [EVENT_TYPES_ENUM.ohota]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.insemenation]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.recheck]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.suhostoi]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.pozSuhostoi]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.abort]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.neosem]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.calving]: EVENT_GROUPS.lifecycle,
  [EVENT_TYPES_ENUM.treatment]: EVENT_GROUPS.veterinary,
  [EVENT_TYPES_ENUM.perevod]: EVENT_GROUPS.movement,
  [EVENT_TYPES_ENUM.changeGroup]: EVENT_GROUPS.movement,
  [EVENT_TYPES_ENUM.transferOut]: EVENT_GROUPS.movement, // выбытие
  [EVENT_TYPES_ENUM.prodazha]: EVENT_GROUPS.movement,
  [EVENT_TYPES_ENUM.biometry]: EVENT_GROUPS.other,
  [EVENT_TYPES_ENUM.retagging]: EVENT_GROUPS.other,
};

/** Event types of each group, in EVENT_GROUP_BY_TYPE order. */
export const EVENT_BY_GROUPS = Object.values(EVENT_GROUPS).reduce(
  (result, group) => ({
    ...result,
    [group]: (Object.keys(EVENT_GROUP_BY_TYPE) as EVENT_TYPES_ENUM[]).filter(
      (type) => EVENT_GROUP_BY_TYPE[type] === group,
    ),
  }),
  {} as Record<EVENT_GROUPS, EVENT_TYPES_ENUM[]>,
);

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

export enum DISPOSAL_REASON_CATEGORY_ENUM {
  health = 'health', // незаразные болезни и травмы
  infect = 'infect', // инфекционные болезни
  zoo = 'zoo', // зоотехнические причины
  sale = 'sale', // продажа
  other = 'other', // прочее
}

// Коды стандартных причин выбытия; коды TRANSFEROUT_REASON_ENUM сохранены
export enum DISPOSAL_REASON_CODE_ENUM {
  respiratory = 'respiratory', // Болезни органов дыхания
  calvingInjury = 'calvingInjury', // Новотел / родовые травмы
  abomasumDisplacement = 'abomasumDisplacement', // Смещение сычуга
  lameness = 'lameness', // Болезни конечностей (хромота)
  injury = 'injury', // Травма
  hipInjury = 'hipInjury', // Растяжение / ТБС
  metabolicDisorders = 'metabolicDisorders', // Нарушение обмена веществ
  udderDiseases = 'udderDiseases', // Болезни и травмы вымени
  circulatory = 'circulatory', // Болезни органов кровообращения
  digestive = 'digestive', // Болезни ЖКТ
  ginekologic = 'ginekologic', // Гинекологические заболевания
  leikoz = 'leikoz', // Лейкоз
  tuberkulez = 'tuberkulez', // Туберкулёз
  klostirikoz = 'klostirikoz', // Клостридиоз
  nekrobacilez = 'nekrobacilez', // Некробактериоз
  aktinomikoz = 'aktinomikoz', // Актиномикоз
  zooCull = 'zooCull', // Зоотехнический брак
  infertility = 'infertility', // Воспроизводство (бесплодие)
  lowYield = 'lowYield', // Низкая продуктивность
  salesToThePublic = 'salesToThePublic', // Продажа населению
  breedingSales = 'breedingSales', // Племпродажа
  theft = 'theft', // Кража
  other = 'other', // Другое
  dead = 'dead', // Сдохла (устаревшая, заменена типом «Падёж»)
}

export const DISPOSAL_REASON_CODE_CATEGORY: Record<
  DISPOSAL_REASON_CODE_ENUM,
  DISPOSAL_REASON_CATEGORY_ENUM
> = {
  [DISPOSAL_REASON_CODE_ENUM.respiratory]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.calvingInjury]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.abomasumDisplacement]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.lameness]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.injury]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.hipInjury]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.metabolicDisorders]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.udderDiseases]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.circulatory]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.digestive]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.ginekologic]: DISPOSAL_REASON_CATEGORY_ENUM.health,
  [DISPOSAL_REASON_CODE_ENUM.leikoz]: DISPOSAL_REASON_CATEGORY_ENUM.infect,
  [DISPOSAL_REASON_CODE_ENUM.tuberkulez]: DISPOSAL_REASON_CATEGORY_ENUM.infect,
  [DISPOSAL_REASON_CODE_ENUM.klostirikoz]: DISPOSAL_REASON_CATEGORY_ENUM.infect,
  [DISPOSAL_REASON_CODE_ENUM.nekrobacilez]: DISPOSAL_REASON_CATEGORY_ENUM.infect,
  [DISPOSAL_REASON_CODE_ENUM.aktinomikoz]: DISPOSAL_REASON_CATEGORY_ENUM.infect,
  [DISPOSAL_REASON_CODE_ENUM.zooCull]: DISPOSAL_REASON_CATEGORY_ENUM.zoo,
  [DISPOSAL_REASON_CODE_ENUM.infertility]: DISPOSAL_REASON_CATEGORY_ENUM.zoo,
  [DISPOSAL_REASON_CODE_ENUM.lowYield]: DISPOSAL_REASON_CATEGORY_ENUM.zoo,
  [DISPOSAL_REASON_CODE_ENUM.salesToThePublic]: DISPOSAL_REASON_CATEGORY_ENUM.sale,
  [DISPOSAL_REASON_CODE_ENUM.breedingSales]: DISPOSAL_REASON_CATEGORY_ENUM.sale,
  [DISPOSAL_REASON_CODE_ENUM.theft]: DISPOSAL_REASON_CATEGORY_ENUM.other,
  [DISPOSAL_REASON_CODE_ENUM.other]: DISPOSAL_REASON_CATEGORY_ENUM.other,
  [DISPOSAL_REASON_CODE_ENUM.dead]: DISPOSAL_REASON_CATEGORY_ENUM.other,
};

export enum DISPOSAL_REASON_OUTCOME_ENUM {
  sold = 'sold', // животное продано
  theft = 'theft', // животное украдено
}

// Исход стандартной причины задаёт статус животного; у остальных причин исхода нет
export const DISPOSAL_REASON_CODE_OUTCOME: Partial<
  Record<DISPOSAL_REASON_CODE_ENUM, DISPOSAL_REASON_OUTCOME_ENUM>
> = {
  [DISPOSAL_REASON_CODE_ENUM.salesToThePublic]: DISPOSAL_REASON_OUTCOME_ENUM.sold,
  [DISPOSAL_REASON_CODE_ENUM.breedingSales]: DISPOSAL_REASON_OUTCOME_ENUM.sold,
  [DISPOSAL_REASON_CODE_ENUM.theft]: DISPOSAL_REASON_OUTCOME_ENUM.theft,
};
