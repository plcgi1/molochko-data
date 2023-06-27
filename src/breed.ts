import { EnumItem } from './types';
import { asObject } from './helpers'

const BREED: EnumItem[] = [
  { label: 'AMERICAN LINEBACK', id: 'LD' },
  { label: 'AYRSHIRE', id: 'A' },
  {
    label: 'AYRSHIRE',
    id: 'AY',
  },
  { label: 'BROWN SWISS', id: 'B' },
  { label: 'BROWN SWISS', id: 'BS' },
  {
    label: 'GIROLANDO',
    id: 'GO',
  },
  { label: 'GUERNSEY', id: 'G' },
  { label: 'GUERNSEY', id: 'GU' },
  {
    label: 'HOLSTEIN',
    id: 'H',
  },
  { label: 'HOLSTEIN', id: 'HO' },
  { label: 'JERSEY', id: 'J' },
  {
    label: 'JERSEY',
    id: 'JE',
  },
  { label: 'RED & WHITE HOLSTEIN', id: 'WW' },
  {
    label: 'RED SINDHI',
    id: 'ES',
  },
  { label: 'SHORTHORN (Milking)', id: 'M' },
  {
    label: 'SHORTHORN (Milking)',
    id: 'MS',
  },
  { label: 'INTERNATIONAL RED DAIRY', id: 'RE' },
  {
    label: 'MILKING DEVON',
    id: 'MD',
  },
  { label: 'NORWEGIAN RED AND WHITE', id: 'NR' },
  {
    label: 'SWEDISH RED AND WHITE',
    id: 'SR',
  },
  { label: 'DAIRY CROSSBREEDS', id: 'X' },
  {
    label: 'DAIRY CROSSBREEDS',
    id: 'XD',
  },
  { label: 'DAIRY x BEEF CROSSBREEDS', id: 'XX' },
  {
    label: 'CANGAIAN',
    id: 'CAN',
  },
  { label: 'GUZERA LEITEIRO', id: 'GZ' },
  { label: 'SINDHI', id: 'SDI' },
  {
    label: 'GUZOLANDO',
    id: 'GUZ',
  },
  { label: 'JERSOLANDA', id: 'HJ' },
  {
    label: 'AMERICAN ABERDEEN',
    id: 'AD',
  },
  { label: 'AFRICANDER', id: 'AF' },
  { label: 'AMERICAN AKAUSHI', id: 'AA' },
  {
    label: 'ANGUS',
    id: 'AN',
  },
  { label: 'ANGUS PLUS', id: 'NP' },
  { label: 'ANKINA', id: 'AK' },
  {
    label: 'ANKOLEWATUSI',
    id: 'AW',
  },
  { label: 'AMERICAN BREED', id: 'AE' },
  {
    label: 'AMERICAN BUCKING',
    id: 'MB',
  },
  { label: 'AMERIFAX', id: 'AM' },
  { label: 'BARZONA', id: 'BA' },
  {
    label: 'BEEFALO',
    id: 'BE',
  },
  { label: 'BEEF FRIESIAN', id: 'BF' },
  {
    label: 'BEEFMASTER',
    id: 'BM',
  },
  { label: 'BELGIAN BLUE', id: 'BB' },
  {
    label: 'BELTED GALLOWAY',
    id: 'BG',
  },
  { label: 'BLACK MAXIMIZER', id: 'BX' },
  {
    label: "BLONDE d'AQUITAINE",
    id: 'BD',
  },
  { label: 'BONSMARA', id: 'NS' },
  { label: 'BRAFORD', id: 'BO' },
  {
    label: 'BRAHMAN',
    id: 'BR',
  },
  { label: 'BRAHMOUSIN', id: 'BI' },
  { label: 'BRALER', id: 'BL' },
  {
    label: 'BRANGUS',
    id: 'BN',
  },
  { label: 'BRAUNVEIH', id: 'BU' },
  {
    label: 'BRITISH WHITE',
    id: 'BW',
  },
  { label: 'BROWN SWISS (beef)', id: 'SB' },
  {
    label: 'BUELINGO',
    id: 'BQ',
  },
  { label: 'CANADIENNE', id: 'CN' },
  { label: 'CANCHIM', id: 'CC' },
  {
    label: 'CARACU',
    id: 'CR',
  },
  { label: 'CHARBRAY', id: 'CB' },
  { label: 'CHAROLAIS', id: 'CH' },
  {
    label: 'CHI-ANGUS',
    id: 'CG',
  },
  { label: 'CHIANINA', id: 'CA' },
  { label: 'CHI-MAINE', id: 'CM' },
  {
    label: 'DEVON',
    id: 'DE',
  },
  { label: 'DEXTER', id: 'DR' },
  { label: 'DUTCH BELTED', id: 'DL' },
  {
    label: 'ERINGER',
    id: 'ER',
  },
  { label: 'FLAMANDE', id: 'F' },
  { label: 'FLAMANDE', id: 'FA' },
  {
    label: 'FLECKVIEH',
    id: 'FL',
  },
  { label: 'FLORIDA CRACKER', id: 'FC' },
  { label: 'FRIBOURG', id: 'FR' },
  {
    label: 'GALLOWAY',
    id: 'GA',
  },
  { label: 'GELBRAY', id: 'GE' },
  { label: 'GELBVIEH', id: 'GV' },
  {
    label: 'GRAUVIEH',
    id: 'GI',
  },
  { label: 'GRONNINGEN', id: 'GR' },
  { label: 'GUZERAT', id: 'GZ' },
  {
    label: 'GYR (or Gir)',
    id: 'GY',
  },
  { label: 'HAYS CONVERTER', id: 'HC' },
  {
    label: 'HEREFORD (black)',
    id: 'HB',
  },
  { label: 'HEREFORD (horned)', id: 'HH' },
  {
    label: 'HEREFORD (polled)',
    id: 'HP',
  },
  { label: 'HIGHLAND (Scotch)', id: 'SH' },
  {
    label: 'HYBRID (Alberta)',
    id: 'HY',
  },
  { label: 'INDU BRAZIL', id: 'IB' },
  {
    label: 'IRISH BLACK',
    id: 'IK',
  },
  { label: 'KOBE (Wagyu)', id: 'KB' },
  { label: 'LOWLINE', id: 'LO' },
  {
    label: 'LIMOUSIN',
    id: 'LM',
  },
  { label: 'LINCOLN RED', id: 'LR' },
  { label: 'LUING', id: 'LU' },
  {
    label: 'MAINE-ANJOU',
    id: 'MA',
  },
  { label: 'MANDALONG SPECIAL', id: 'ML' },
  {
    label: 'MARCHIGIANA',
    id: 'MR',
  },
  { label: 'MAREMMANA', id: 'ME' },
  {
    label: 'MASHONA',
    id: 'MH',
  },
  { label: 'MEXICAN CORRIENTE', id: 'MC' },
  {
    label: 'MINIATURE ZEBU',
    id: 'MZ',
  },
  { label: 'MONTBELIARDE', id: 'MO' },
  {
    label: 'MUESE-RHINE-ISSEL',
    id: 'MI',
  },
  { label: 'MURRAH', id: 'MU' },
  { label: 'MURRAY GREY', id: 'MG' },
  {
    label: 'NELLORE',
    id: 'NE',
  },
  { label: 'NORMANDE', id: 'NO' },
  { label: 'PARTHENAISE', id: 'PA' },
  {
    label: 'PIEDMONTESE',
    id: 'PI',
  },
  { label: 'PINZGAUER', id: 'PZ' },
  { label: 'RANGER', id: 'RA' },
  {
    label: 'RED ANGUS',
    id: 'AR',
  },
  { label: 'RED BRAHMAN', id: 'RR' },
  { label: 'RED BRANGUS', id: 'RB' },
  {
    label: 'RED DANE',
    id: 'RD',
  },
  { label: 'RED POLL', id: 'RP' },
  { label: 'ROMAGNOLA', id: 'RN' },
  {
    label: 'ROMOSINUANO',
    id: 'RS',
  },
  { label: 'ROTBUNTE', id: 'RO' },
  { label: 'SAHIWAL', id: 'SW' },
  {
    label: 'SALERS',
    id: 'SA',
  },
  { label: 'SANTA GERTRUDIS', id: 'SG' },
  {
    label: 'SENEPOL',
    id: 'SE',
  },
  { label: 'SHORTHORN (beef Scotch)', id: 'SS' },
  {
    label: 'SHORTHORN (Polled)',
    id: 'SP',
  },
  { label: 'SHORTHORN (Illwara)', id: 'IS' },
  {
    label: 'SIMBRAH',
    id: 'SI',
  },
  { label: 'SIMMENTAL', id: 'SM' },
  { label: 'SOUTH DEVON', id: 'DS' },
  {
    label: 'SOUTH POLL',
    id: 'OP',
  },
  { label: 'SPECKLE PARK', id: 'SK' },
  { label: 'SUSSEX', id: 'SX' },
  {
    label: 'TABAPUA',
    id: 'TB',
  },
  { label: 'TARENTAISE', id: 'TA' },
  {
    label: 'TAURINDICUS',
    id: 'TN',
  },
  { label: 'TEXAS LONGHORN', id: 'TL' },
  { label: 'TULI', id: 'TI' },
  {
    label: 'WELSH BLACK',
    id: 'WB',
  },
  { label: 'WEST FLEMISH RED', id: 'WF' },
  {
    label: 'WHITE ANGUS (Ona)',
    id: 'WA',
  },
  { label: 'WHITE PARK', id: 'WP' },
  {
    label: 'CROSSBREEDS (TWINNER)',
    id: 'XT',
  },
  { label: 'BEEF CROSSBREEDS', id: 'XB' },
  { label: 'GUZERA', id: 'GT' },
]

const BREED_AS_OBJECT = asObject(BREED)

export { BREED, BREED_AS_OBJECT }
