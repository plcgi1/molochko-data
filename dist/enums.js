"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_LANG_ENUM = exports.CLIST_AFUNCTIONS_ENUM = exports.CLIST_STATUS_ENUM = exports.CLIST_DATASOURCE_ENUM = exports.CLIST_CONDITION_ENUM = exports.CLIST_TYPE_ENUM = exports.CLIST_DATE_OPERATOR_ENUM = exports.CLIST_STRING_OPERATOR_ENUM = exports.CLIST_NUMBER_OPERATOR_ENUM = exports.EVENT_EXEC_STATUS_ENUM = exports.MEDMETHOD_ENUM = exports.DISEASES_ENUM = exports.TRANSFEROUT_REASON_ENUM = exports.TRANSFEROUT_TYPES_ENUM = exports.ACCESS_ENUM = exports.USER_PERMISSION_METHOD_ENUM = exports.USER_PERMISSION_ENUM = exports.TAG_TYPE_ENUM = exports.COMMON_SIMPLE_STATUS_ENUM = exports.EVENT_ERROR_REASON_ENUM = exports.COW_STATUS = exports.BULL_STATUS = exports.ANIMAL_STATUS_ENUM = exports.SEED_CODES_ENUM = exports.SEED_STATUS_ENUM = exports.SEED_TYPE_ENUM = exports.EVENT_TYPES_ENUM = exports.ANIMAL_GENDER_ENUM = exports.TOKEN_TYPE_ENUM = exports.ORG_TYPE_ENUM = exports.USER_STATUSES_ENUM = exports.SYSTEM_USER_ROLES_ENUM = exports.BCRYPT_SALT = void 0;
exports.BCRYPT_SALT = 12;
var SYSTEM_USER_ROLES_ENUM;
(function (SYSTEM_USER_ROLES_ENUM) {
    SYSTEM_USER_ROLES_ENUM["user"] = "user";
    SYSTEM_USER_ROLES_ENUM["admin"] = "admin";
    SYSTEM_USER_ROLES_ENUM["root"] = "root";
})(SYSTEM_USER_ROLES_ENUM = exports.SYSTEM_USER_ROLES_ENUM || (exports.SYSTEM_USER_ROLES_ENUM = {}));
var USER_STATUSES_ENUM;
(function (USER_STATUSES_ENUM) {
    USER_STATUSES_ENUM["waiting"] = "waiting";
    USER_STATUSES_ENUM["ready"] = "ready";
    USER_STATUSES_ENUM["blocked"] = "blocked";
    USER_STATUSES_ENUM["deleted"] = "deleted";
})(USER_STATUSES_ENUM = exports.USER_STATUSES_ENUM || (exports.USER_STATUSES_ENUM = {}));
var ORG_TYPE_ENUM;
(function (ORG_TYPE_ENUM) {
    ORG_TYPE_ENUM["org"] = "org";
    ORG_TYPE_ENUM["location"] = "location";
})(ORG_TYPE_ENUM = exports.ORG_TYPE_ENUM || (exports.ORG_TYPE_ENUM = {}));
var TOKEN_TYPE_ENUM;
(function (TOKEN_TYPE_ENUM) {
    TOKEN_TYPE_ENUM["confirm"] = "confirm";
    TOKEN_TYPE_ENUM["auth"] = "auth";
    TOKEN_TYPE_ENUM["refresh"] = "refresh";
    TOKEN_TYPE_ENUM["resetPassword"] = "resetPassword";
    TOKEN_TYPE_ENUM["invite"] = "invite";
})(TOKEN_TYPE_ENUM = exports.TOKEN_TYPE_ENUM || (exports.TOKEN_TYPE_ENUM = {}));
var ANIMAL_GENDER_ENUM;
(function (ANIMAL_GENDER_ENUM) {
    ANIMAL_GENDER_ENUM["cow"] = "cow";
    ANIMAL_GENDER_ENUM["bull"] = "bull";
})(ANIMAL_GENDER_ENUM = exports.ANIMAL_GENDER_ENUM || (exports.ANIMAL_GENDER_ENUM = {}));
// перевод,
// аборт,
// проверка стельности,
// выбытие,
// осеменение,
// брак,
// обрезка копыт,
var EVENT_TYPES_ENUM;
(function (EVENT_TYPES_ENUM) {
    EVENT_TYPES_ENUM["otel"] = "otel";
    EVENT_TYPES_ENUM["recheck"] = "recheck";
    EVENT_TYPES_ENUM["ohota"] = "ohota";
    EVENT_TYPES_ENUM["osemenenie"] = "osemenenie";
    EVENT_TYPES_ENUM["stelnaya"] = "stelnaya";
    EVENT_TYPES_ENUM["yalovaya"] = "yalovaya";
    EVENT_TYPES_ENUM["stelneotpos"] = "stelneotpos";
    EVENT_TYPES_ENUM["perevod"] = "perevod";
    EVENT_TYPES_ENUM["kbiku"] = "kbiku";
    EVENT_TYPES_ENUM["suhostoi"] = "suhostoi";
    EVENT_TYPES_ENUM["abort"] = "abort";
    EVENT_TYPES_ENUM["neosem"] = "neosem";
    EVENT_TYPES_ENUM["prodazha"] = "prodazha";
    EVENT_TYPES_ENUM["pala"] = "pala";
    EVENT_TYPES_ENUM["zamenaNomera"] = "zamenaNomera";
    EVENT_TYPES_ENUM["obrKopit"] = "obrKopit";
    EVENT_TYPES_ENUM["pozSuhostoi"] = "pozSuhostoi";
    EVENT_TYPES_ENUM["ves"] = "ves";
    EVENT_TYPES_ENUM["rost"] = "rost";
    EVENT_TYPES_ENUM["upitannost"] = "upitannost";
    EVENT_TYPES_ENUM["zaboi"] = "zaboi";
    EVENT_TYPES_ENUM["sinchronizatsia"] = "sinchronizatsia";
    EVENT_TYPES_ENUM["transferOut"] = "transferOut";
    EVENT_TYPES_ENUM["treatment"] = "treatment";
})(EVENT_TYPES_ENUM = exports.EVENT_TYPES_ENUM || (exports.EVENT_TYPES_ENUM = {}));
var SEED_TYPE_ENUM;
(function (SEED_TYPE_ENUM) {
    SEED_TYPE_ENUM["traditional"] = "traditional";
    SEED_TYPE_ENUM["sexytelka"] = "sexytelka";
    SEED_TYPE_ENUM["sexybull"] = "sexybull";
    SEED_TYPE_ENUM["meat"] = "meat";
    SEED_TYPE_ENUM["meatSexyTelka"] = "meatSexyTelka";
    SEED_TYPE_ENUM["meatSexyBull"] = "meatSexyBull";
})(SEED_TYPE_ENUM = exports.SEED_TYPE_ENUM || (exports.SEED_TYPE_ENUM = {}));
var SEED_STATUS_ENUM;
(function (SEED_STATUS_ENUM) {
    SEED_STATUS_ENUM["active"] = "active";
    SEED_STATUS_ENUM["notActive"] = "notActive";
})(SEED_STATUS_ENUM = exports.SEED_STATUS_ENUM || (exports.SEED_STATUS_ENUM = {}));
var SEED_CODES_ENUM;
(function (SEED_CODES_ENUM) {
    SEED_CODES_ENUM["DOUBLE_OVSYNC"] = "doubleOvsync";
    SEED_CODES_ENUM["PRESYNC"] = "dresync";
    SEED_CODES_ENUM["RESYNC"] = "resync";
    SEED_CODES_ENUM["OVSYNC"] = "ovsync";
    SEED_CODES_ENUM["HEAT"] = "heat";
    SEED_CODES_ENUM["ACTIVITY_SENSOR"] = "activitySensor";
    SEED_CODES_ENUM["PRID_DELTA"] = "PRIDDelta";
    SEED_CODES_ENUM["G6G"] = "G6G";
})(SEED_CODES_ENUM = exports.SEED_CODES_ENUM || (exports.SEED_CODES_ENUM = {}));
var ANIMAL_STATUS_ENUM;
(function (ANIMAL_STATUS_ENUM) {
    ANIMAL_STATUS_ENUM["heifer"] = "heifer";
    ANIMAL_STATUS_ENUM["bred"] = "bred";
    ANIMAL_STATUS_ENUM["pregnant"] = "pregnant";
    ANIMAL_STATUS_ENUM["open"] = "open";
    ANIMAL_STATUS_ENUM["fresh"] = "fresh";
    ANIMAL_STATUS_ENUM["dry"] = "dry";
    ANIMAL_STATUS_ENUM["dnb"] = "dnb";
    ANIMAL_STATUS_ENUM["sold"] = "sold";
    ANIMAL_STATUS_ENUM["died"] = "died";
    ANIMAL_STATUS_ENUM["theft"] = "theft";
    ANIMAL_STATUS_ENUM["transferout"] = "transferout";
})(ANIMAL_STATUS_ENUM = exports.ANIMAL_STATUS_ENUM || (exports.ANIMAL_STATUS_ENUM = {}));
var BULL_STATUS;
(function (BULL_STATUS) {
    BULL_STATUS["SOLD"] = "sold";
    BULL_STATUS["BULL"] = "bull";
    BULL_STATUS["DIED"] = "died";
})(BULL_STATUS = exports.BULL_STATUS || (exports.BULL_STATUS = {}));
var COW_STATUS;
(function (COW_STATUS) {
    COW_STATUS["HEIFER"] = "heifer";
    COW_STATUS["BRED"] = "bred";
    COW_STATUS["PREGNANT"] = "pregnant";
    COW_STATUS["OPEN"] = "open";
    COW_STATUS["FRESH"] = "fresh";
    COW_STATUS["DRY"] = "dry";
    COW_STATUS["DNB"] = "dnb";
    COW_STATUS["SOLD"] = "sold";
    COW_STATUS["DIED"] = "died";
})(COW_STATUS = exports.COW_STATUS || (exports.COW_STATUS = {}));
// heifer, bred, open, fresh
var EVENT_ERROR_REASON_ENUM;
(function (EVENT_ERROR_REASON_ENUM) {
    EVENT_ERROR_REASON_ENUM["statusNotAllowed"] = "animal-status-not-allowed";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedPregnant"] = "animal-status-not-allowed-pregnant";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedDry"] = "animal-status-not-allowed-dry";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedDnb"] = "animal-status-not-allowed-dnb";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedSold"] = "animal-status-not-allowed-sold";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedDied"] = "animal-status-not-allowed-died";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedBred"] = "animal-status-not-allowed-bred";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedFresh"] = "animal-status-not-allowed-fresh";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedHeifer"] = "animal-status-not-allowed-heifer";
    EVENT_ERROR_REASON_ENUM["statusNotAllowedOpen"] = "animal-status-not-allowed-open";
    EVENT_ERROR_REASON_ENUM["statusForFirstRecheckBredOnly"] = "animal-status-for-first-recheck-bred-only";
    EVENT_ERROR_REASON_ENUM["notACow"] = "animal-not-a-cow";
    EVENT_ERROR_REASON_ENUM["tooYoung"] = "animal-too-young";
})(EVENT_ERROR_REASON_ENUM = exports.EVENT_ERROR_REASON_ENUM || (exports.EVENT_ERROR_REASON_ENUM = {}));
var COMMON_SIMPLE_STATUS_ENUM;
(function (COMMON_SIMPLE_STATUS_ENUM) {
    COMMON_SIMPLE_STATUS_ENUM["failed"] = "failed";
    COMMON_SIMPLE_STATUS_ENUM["success"] = "success";
})(COMMON_SIMPLE_STATUS_ENUM = exports.COMMON_SIMPLE_STATUS_ENUM || (exports.COMMON_SIMPLE_STATUS_ENUM = {}));
var TAG_TYPE_ENUM;
(function (TAG_TYPE_ENUM) {
    TAG_TYPE_ENUM["user"] = "user";
    TAG_TYPE_ENUM["system"] = "system";
    TAG_TYPE_ENUM["event"] = "event";
})(TAG_TYPE_ENUM = exports.TAG_TYPE_ENUM || (exports.TAG_TYPE_ENUM = {}));
var USER_PERMISSION_ENUM;
(function (USER_PERMISSION_ENUM) {
    USER_PERMISSION_ENUM["view"] = "view";
    USER_PERMISSION_ENUM["create"] = "create";
    USER_PERMISSION_ENUM["update"] = "update";
    USER_PERMISSION_ENUM["delete"] = "delete";
    USER_PERMISSION_ENUM["deleteAll"] = "deleteAll";
    USER_PERMISSION_ENUM["attach"] = "attach";
    USER_PERMISSION_ENUM["detach"] = "detach";
})(USER_PERMISSION_ENUM = exports.USER_PERMISSION_ENUM || (exports.USER_PERMISSION_ENUM = {}));
var USER_PERMISSION_METHOD_ENUM;
(function (USER_PERMISSION_METHOD_ENUM) {
    USER_PERMISSION_METHOD_ENUM["post"] = "post";
    USER_PERMISSION_METHOD_ENUM["put"] = "put";
    USER_PERMISSION_METHOD_ENUM["delete"] = "delete";
    USER_PERMISSION_METHOD_ENUM["get"] = "get";
    USER_PERMISSION_METHOD_ENUM["patch"] = "patch";
})(USER_PERMISSION_METHOD_ENUM = exports.USER_PERMISSION_METHOD_ENUM || (exports.USER_PERMISSION_METHOD_ENUM = {}));
var ACCESS_ENUM;
(function (ACCESS_ENUM) {
    ACCESS_ENUM["read"] = "read";
    ACCESS_ENUM["write"] = "write";
})(ACCESS_ENUM = exports.ACCESS_ENUM || (exports.ACCESS_ENUM = {}));
var TRANSFEROUT_TYPES_ENUM;
(function (TRANSFEROUT_TYPES_ENUM) {
    TRANSFEROUT_TYPES_ENUM["transferOut"] = "transferOut";
    TRANSFEROUT_TYPES_ENUM["died"] = "died";
})(TRANSFEROUT_TYPES_ENUM = exports.TRANSFEROUT_TYPES_ENUM || (exports.TRANSFEROUT_TYPES_ENUM = {}));
var TRANSFEROUT_REASON_ENUM;
(function (TRANSFEROUT_REASON_ENUM) {
    TRANSFEROUT_REASON_ENUM["leikoz"] = "leikoz";
    TRANSFEROUT_REASON_ENUM["tuberkulez"] = "tuberkulez";
    TRANSFEROUT_REASON_ENUM["klostirikoz"] = "klostirikoz";
    TRANSFEROUT_REASON_ENUM["nekrobacilez"] = "nekrobacilez";
    TRANSFEROUT_REASON_ENUM["aktinomikoz"] = "aktinomikoz";
    TRANSFEROUT_REASON_ENUM["ginekologic"] = "ginekologic";
    TRANSFEROUT_REASON_ENUM["metabolicDisorders"] = "metabolicDisorders";
    TRANSFEROUT_REASON_ENUM["Infertility"] = "infertility";
    TRANSFEROUT_REASON_ENUM["udderDiseases"] = "udderDiseases";
    TRANSFEROUT_REASON_ENUM["lameness"] = "lameness";
    TRANSFEROUT_REASON_ENUM["breedingSales"] = "breedingSales";
    TRANSFEROUT_REASON_ENUM["salesToThePublic"] = "salesToThePublic";
    TRANSFEROUT_REASON_ENUM["theft"] = "theft";
    TRANSFEROUT_REASON_ENUM["dead"] = "dead";
})(TRANSFEROUT_REASON_ENUM = exports.TRANSFEROUT_REASON_ENUM || (exports.TRANSFEROUT_REASON_ENUM = {}));
var DISEASES_ENUM;
(function (DISEASES_ENUM) {
    DISEASES_ENUM["PREVENTION"] = "prevention";
    DISEASES_ENUM["VACCTINATION"] = "vaccination";
    DISEASES_ENUM["MASTITIS"] = "mastitis";
    DISEASES_ENUM["METRITIS"] = "metritis";
    DISEASES_ENUM["PARESIS"] = "paresis";
    DISEASES_ENUM["TEMPERATURE"] = "temperature";
    DISEASES_ENUM["ABOMASUM_DISPLACEMENT"] = "abomasum_displacement";
    DISEASES_ENUM["LAMENESS"] = "lameness";
    DISEASES_ENUM["INJURY"] = "injury";
    DISEASES_ENUM["DEHORNING"] = "dehorning";
    DISEASES_ENUM["METABOLIC_DISEASE"] = "metabolic disease";
    DISEASES_ENUM["DIARRHEA"] = "diarrhea";
    DISEASES_ENUM["ATONY"] = "atony";
    DISEASES_ENUM["PNEUMONIA"] = "pneumonia";
    DISEASES_ENUM["TYMPANY"] = "tympany";
    DISEASES_ENUM["HEALTHY"] = "healthy";
    DISEASES_ENUM["KETOSIS"] = "ketosis";
    DISEASES_ENUM["CONJUNCTEVITIS"] = "conjunctevitis";
    DISEASES_ENUM["DIPEPSIA"] = "dipepsia";
    DISEASES_ENUM["SYNCHRONIZATION"] = "synchronization";
    DISEASES_ENUM["OTHER"] = "other";
})(DISEASES_ENUM = exports.DISEASES_ENUM || (exports.DISEASES_ENUM = {}));
var MEDMETHOD_ENUM;
(function (MEDMETHOD_ENUM) {
    MEDMETHOD_ENUM["SUBCUTANEOUSLY"] = "subcutaneously";
    MEDMETHOD_ENUM["NASALLY"] = "nasally";
    MEDMETHOD_ENUM["INTRAMUSCULARLY"] = "intramuscularly";
    MEDMETHOD_ENUM["INTRACISTERNALLY"] = "intracesternally";
    MEDMETHOD_ENUM["ORALLY"] = "orally";
    MEDMETHOD_ENUM["INTRAVENOUSLY"] = "intravenously";
    MEDMETHOD_ENUM["INTRAUTERINE"] = "intrauterine";
    MEDMETHOD_ENUM["INTRAVAGINALLY"] = "intravaginally";
})(MEDMETHOD_ENUM = exports.MEDMETHOD_ENUM || (exports.MEDMETHOD_ENUM = {}));
var EVENT_EXEC_STATUS_ENUM;
(function (EVENT_EXEC_STATUS_ENUM) {
    EVENT_EXEC_STATUS_ENUM["waiting"] = "waiting";
    EVENT_EXEC_STATUS_ENUM["done"] = "done";
    EVENT_EXEC_STATUS_ENUM["cancel"] = "cancel";
    EVENT_EXEC_STATUS_ENUM["block"] = "block";
})(EVENT_EXEC_STATUS_ENUM = exports.EVENT_EXEC_STATUS_ENUM || (exports.EVENT_EXEC_STATUS_ENUM = {}));
// TODO removeme
var CLIST_NUMBER_OPERATOR_ENUM;
(function (CLIST_NUMBER_OPERATOR_ENUM) {
    CLIST_NUMBER_OPERATOR_ENUM["eq"] = "eq";
    CLIST_NUMBER_OPERATOR_ENUM["gte"] = "gte";
    CLIST_NUMBER_OPERATOR_ENUM["lte"] = "lte";
    CLIST_NUMBER_OPERATOR_ENUM["lt"] = "lt";
    CLIST_NUMBER_OPERATOR_ENUM["gt"] = "gt";
})(CLIST_NUMBER_OPERATOR_ENUM = exports.CLIST_NUMBER_OPERATOR_ENUM || (exports.CLIST_NUMBER_OPERATOR_ENUM = {}));
// TODO removeme
var CLIST_STRING_OPERATOR_ENUM;
(function (CLIST_STRING_OPERATOR_ENUM) {
    CLIST_STRING_OPERATOR_ENUM["eq"] = "eq";
    CLIST_STRING_OPERATOR_ENUM["consists"] = "consists";
})(CLIST_STRING_OPERATOR_ENUM = exports.CLIST_STRING_OPERATOR_ENUM || (exports.CLIST_STRING_OPERATOR_ENUM = {}));
// TODO removeme
var CLIST_DATE_OPERATOR_ENUM;
(function (CLIST_DATE_OPERATOR_ENUM) {
    CLIST_DATE_OPERATOR_ENUM["eq"] = "eq";
    CLIST_DATE_OPERATOR_ENUM["between"] = "between";
})(CLIST_DATE_OPERATOR_ENUM = exports.CLIST_DATE_OPERATOR_ENUM || (exports.CLIST_DATE_OPERATOR_ENUM = {}));
// TODO removeme
var CLIST_TYPE_ENUM;
(function (CLIST_TYPE_ENUM) {
    CLIST_TYPE_ENUM["string"] = "string";
    CLIST_TYPE_ENUM["number"] = "number";
    CLIST_TYPE_ENUM["date"] = "date";
})(CLIST_TYPE_ENUM = exports.CLIST_TYPE_ENUM || (exports.CLIST_TYPE_ENUM = {}));
// TODO removeme
var CLIST_CONDITION_ENUM;
(function (CLIST_CONDITION_ENUM) {
    CLIST_CONDITION_ENUM["and"] = "and";
    CLIST_CONDITION_ENUM["or"] = "or";
    CLIST_CONDITION_ENUM["not"] = "not";
})(CLIST_CONDITION_ENUM = exports.CLIST_CONDITION_ENUM || (exports.CLIST_CONDITION_ENUM = {}));
// TODO removeme
var CLIST_DATASOURCE_ENUM;
(function (CLIST_DATASOURCE_ENUM) {
    CLIST_DATASOURCE_ENUM["animals"] = "animals";
    CLIST_DATASOURCE_ENUM["events"] = "events";
    CLIST_DATASOURCE_ENUM["seedBank"] = "seedBank";
    CLIST_DATASOURCE_ENUM["employee"] = "employee";
    CLIST_DATASOURCE_ENUM["org"] = "org";
    CLIST_DATASOURCE_ENUM["protocol"] = "protocol";
    CLIST_DATASOURCE_ENUM["treatment"] = "treatment";
})(CLIST_DATASOURCE_ENUM = exports.CLIST_DATASOURCE_ENUM || (exports.CLIST_DATASOURCE_ENUM = {}));
// TODO removeme
var CLIST_STATUS_ENUM;
(function (CLIST_STATUS_ENUM) {
    CLIST_STATUS_ENUM["working"] = "working";
    CLIST_STATUS_ENUM["published"] = "published";
})(CLIST_STATUS_ENUM = exports.CLIST_STATUS_ENUM || (exports.CLIST_STATUS_ENUM = {}));
// TODO removeme
var CLIST_AFUNCTIONS_ENUM;
(function (CLIST_AFUNCTIONS_ENUM) {
    CLIST_AFUNCTIONS_ENUM["count"] = "count";
    CLIST_AFUNCTIONS_ENUM["min"] = "min";
    CLIST_AFUNCTIONS_ENUM["max"] = "max";
    CLIST_AFUNCTIONS_ENUM["avg"] = "avg";
    CLIST_AFUNCTIONS_ENUM["sum"] = "sum";
})(CLIST_AFUNCTIONS_ENUM = exports.CLIST_AFUNCTIONS_ENUM || (exports.CLIST_AFUNCTIONS_ENUM = {}));
var SUPPORTED_LANG_ENUM;
(function (SUPPORTED_LANG_ENUM) {
    SUPPORTED_LANG_ENUM["ru"] = "ru";
    SUPPORTED_LANG_ENUM["en"] = "en";
})(SUPPORTED_LANG_ENUM = exports.SUPPORTED_LANG_ENUM || (exports.SUPPORTED_LANG_ENUM = {}));
