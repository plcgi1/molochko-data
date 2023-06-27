import { EnumItem } from './types';
import { asObject } from './helpers'

const BCRYPT_SALT: number = 12

const SYSTEM_USER_ROLES: EnumItem[] = [
  {
    id: 'user',
    label: 'User',
  },
  {
    id: 'admin',
    label: 'Admin',
  },
  {
    id: 'root',
    label: 'Tsar',
  },
  {
    id: 'zootech',
    label: 'Zootechnik',
  },
]

const SYSTEM_USER_ROLES_AS_OBJECT = asObject(SYSTEM_USER_ROLES)

const USER_STATUSES: EnumItem[] = [
  {
    id: 'waiting',
    label: 'Waiting for confirmation',
  },
  {
    id: 'ready',
    label: 'Ready',
  },
  {
    id: 'blocked',
    label: 'Blocked',
  },
  {
    id: 'deleted',
    label: 'Deleted',
  },
]

const USER_STATUSES_AS_OBJECT = asObject(USER_STATUSES)

const TOKEN_TYPE: EnumItem[] = [
  {
    id: 'confirm',
    label: 'Confirm',
  },
  {
    id: 'auth',
    label: 'Auth',
  },
  {
    id: 'refresh',
    label: 'Refresh',
  },
  {
    id: 'resetPassword',
    label: 'Reset password',
  },
  {
    id: 'invite',
    label: 'Invite',
  }
]
const TOKEN_TYPES_AS_OBJECT = asObject(TOKEN_TYPE)

const ANIMAL_GENDER: EnumItem[]  = [
  {
    id: 'cow',
    label: 'Cow'
  },
  {
    id: 'bull',
    label: 'Bull'
  },
]
const ANIMAL_GENDER_AS_OBJECT = asObject(ANIMAL_GENDER)

const ANIMAL_STATUS: EnumItem[] = [
  {
    id: 'heifer',
    color: 'magenta',
    label: 'Телка'
  },
  {
    id: 'bred',
    color: 'blue',
    label: 'Осемененная'
  },
  {
    id: 'pregnant',
    label: 'Стельная',
    color: 'volcano'
  },
  {
    id: 'open',
    label: 'Яловая',
    color: 'orange'
  },
  {
    id: 'fresh',
    label: 'Новотельная',
    color: 'gold'
  },
  {
    id: 'dry',
    label: 'Сухостой',
    color: 'lime'
  },
  {
    id: 'dnb',
    label: 'Брак',
    color: 'green'
  },
  {
    id: 'sold',
    label: 'Продана',
    color: 'cyan'
  },
  {
    id: 'died',
    label: 'Сдохла',
    color: 'red'
  },
]
const ANIMAL_STATUS_AS_OBJECT = asObject(ANIMAL_STATUS)

const EVENT_TYPES: EnumItem[] = [
  {
    id: 'otel',
    label: 'ОТЕЛ'
  },
  {
    id: 'recheck',
    label: 'ПЕРЕПРОВЕРИТЬ'
  },
  {
    id: 'ohota',
    label: 'ОХОТА'
  },
  {
    id: 'osemenenie',
    label: 'ОСЕМЕНЕНИЕ'
  },
  {
    id: 'stelnaya',
    label: 'СТЕЛЬНАЯ'
  },
  {
    id: 'yalovaya',
    label: 'ЯЛОВАЯ (НЕ СТЕЛЬНАЯ)'
  },
  {
    id: 'stelneotpos',
    label: 'СТЕЛЬНАЯ НЕ ОТ ПОС ОСЕМЕНЕНИЯ'
  },
  {
    id: 'perevod',
    label: 'ПЕРЕВОД'
  },
  {
    id: 'kbiku',
    label: 'КБЫКУ'
  },
  {
    id: 'suhostoi',
    label: 'СУХОСТОЙ'
  },
  {
    id: 'abort',
    label: 'АБОРТ'
  },
  {
    id: 'neosem',
    label: 'НЕОСЕМ (БРАК)'
  },
  {
    id: 'prodazha',
    label: 'ПРОДАЖА'
  },
  {
    id: 'pala',
    label: 'ПАЛА'
  },
  {
    id: 'zamenaNomera',
    label: 'ЗАМЕНА НОМЕРА'
  },
  {
    id: 'obrKopit',
    label: 'ОБРАБОТКА КОПЫТ'
  },
  {
    id: 'pozSuhostoi',
    label: 'ПОЗСУХОСТОЙ'
  },
  {
    id: 'ves',
    label: 'ВЕС'
  },
  {
    id: 'rost',
    label: 'РОСТ'
  },
  {
    id: 'upitannost',
    label: 'УПИТАННОСТЬ'
  },
  {
    id: 'zaboi',
    label: 'ЗАБОЙ'
  },
  {
    id: 'sinchronizatsia',
    label: 'СИНХРОНИЗАЦИЯ'
  }
]
const EVENT_TYPES_AS_OBJECT = asObject(EVENT_TYPES)

const SEED_TYPE: EnumItem[] = [
  {
    id: 'traditional',
    label: 'Традиционное'
  },
  {
    id: 'sexytelka',
    label: 'Сексированное телка'
  },
  {
    id: 'sexybull',
    label: 'Сексированное бычок'
  },
  {
    id: 'meat',
    label: 'Мясное'
  },
  {
    id: 'meatSexyTelka',
    label: 'Мясное сексированное телка'
  },
  {
    id: 'meatSexyBull',
    label: 'Мясное сексированное бычок'
  }
]
const SEED_TYPE_AS_OBJECT = asObject(SEED_TYPE)

const SEED_STATUS: EnumItem[] = [
  { id: 'active', label: 'Активно' },
  { id: 'notActive', label: 'Не Активно' }
]
const SEED_STATUS_AS_OBJECT = asObject(SEED_STATUS)

export {
  BCRYPT_SALT,
  SYSTEM_USER_ROLES,
  SYSTEM_USER_ROLES_AS_OBJECT,
  USER_STATUSES,
  USER_STATUSES_AS_OBJECT,
  TOKEN_TYPE,
  TOKEN_TYPES_AS_OBJECT,
  ANIMAL_GENDER,
  ANIMAL_GENDER_AS_OBJECT,
  ANIMAL_STATUS,
  ANIMAL_STATUS_AS_OBJECT,
  EVENT_TYPES,
  EVENT_TYPES_AS_OBJECT,
  SEED_TYPE,
  SEED_TYPE_AS_OBJECT,
  SEED_STATUS_AS_OBJECT
}
