export declare const BCRYPT_SALT: number;
export declare enum SYSTEM_USER_ROLES_ENUM {
    user = "user",
    admin = "admin",
    root = "root",
    blocked = "blocked"
}
export declare enum USER_STATUSES_ENUM {
    waiting = "waiting",
    ready = "ready",
    blocked = "blocked",
    deleted = "deleted"
}
export declare enum ORG_TYPE_ENUM {
    org = "org",
    location = "location"
}
export declare enum TOKEN_TYPE_ENUM {
    confirm = "confirm",
    auth = "auth",
    refresh = "refresh",
    resetPassword = "resetPassword",
    invite = "invite"
}
export declare enum ANIMAL_GENDER_ENUM {
    cow = "cow",
    bull = "bull"
}
export declare enum EVENT_TYPES_ENUM {
    otel = "otel",
    recheck = "recheck",
    ohota = "ohota",
    insemenation = "insemenation",
    stelnaya = "stelnaya",
    yalovaya = "yalovaya",
    stelneotpos = "stelneotpos",
    perevod = "perevod",
    kbiku = "kbiku",
    suhostoi = "suhostoi",
    abort = "abort",
    neosem = "neosem",
    prodazha = "prodazha",
    pala = "pala",
    zamenaNomera = "zamenaNomera",
    obrKopit = "obrKopit",
    pozSuhostoi = "pozSuhostoi",
    ves = "ves",
    rost = "rost",
    upitannost = "upitannost",
    zaboi = "zaboi",
    sinchronizatsia = "sinchronizatsia",
    transferOut = "transferOut",
    treatment = "treatment"
}
export declare enum SEED_TYPE_ENUM {
    traditional = "traditional",
    sexytelka = "sexytelka",
    sexybull = "sexybull",
    meat = "meat",
    meatSexyTelka = "meatSexyTelka",
    meatSexyBull = "meatSexyBull"
}
export declare enum SEED_STATUS_ENUM {
    active = "active",
    notActive = "notActive"
}
export declare enum SEED_CODES_ENUM {
    DOUBLE_OVSYNC = "doubleOvsync",
    PRESYNC = "dresync",
    RESYNC = "resync",
    OVSYNC = "ovsync",
    HEAT = "heat",
    ACTIVITY_SENSOR = "activitySensor",
    PRID_DELTA = "PRIDDelta",
    G6G = "G6G"
}
export declare enum ANIMAL_STATUS_ENUM {
    heifer = "heifer",
    bred = "bred",
    pregnant = "pregnant",
    open = "open",
    fresh = "fresh",
    dry = "dry",
    dnb = "dnb",
    sold = "sold",
    died = "died",
    theft = "theft",
    transferout = "transferout"
}
export declare enum BULL_STATUS {
    SOLD = "sold",
    BULL = "bull",
    DIED = "died"
}
export declare enum COW_STATUS {
    HEIFER = "heifer",
    BRED = "bred",
    PREGNANT = "pregnant",
    OPEN = "open",
    FRESH = "fresh",
    DRY = "dry",
    DNB = "dnb",
    SOLD = "sold",
    DIED = "died"
}
export declare enum COMMON_SIMPLE_STATUS_ENUM {
    failed = "failed",
    success = "success"
}
export declare enum TAG_TYPE_ENUM {
    user = "user",
    system = "system",
    event = "event"
}
export declare enum USER_PERMISSION_ENUM {
    view = "view",
    create = "create",
    update = "update",
    delete = "delete",
    deleteAll = "deleteAll",
    attach = "attach",
    detach = "detach"
}
export declare enum USER_PERMISSION_METHOD_ENUM {
    post = "post",
    put = "put",
    delete = "delete",
    get = "get",
    patch = "patch"
}
export declare enum ACCESS_ENUM {
    read = "read",
    write = "write"
}
export declare enum CLIST_NUMBER_OPERATOR_ENUM {
    eq = "eq",
    gte = "gte",
    lte = "lte",
    lt = "lt",
    gt = "gt"
}
export declare enum CLIST_STRING_OPERATOR_ENUM {
    eq = "eq",
    consists = "consists"
}
export declare enum CLIST_DATE_OPERATOR_ENUM {
    eq = "eq",
    between = "between"
}
export declare enum CLIST_TYPE_ENUM {
    string = "string",
    number = "number",
    date = "date"
}
export declare enum CLIST_CONDITION_ENUM {
    and = "and",
    or = "or",
    not = "not"
}
export declare enum CLIST_DATASOURCE_ENUM {
    animals = "animals",
    events = "events",
    seedBank = "seedBank",
    employee = "employee",
    org = "org",
    protocol = "protocol",
    treatment = "treatment"
}
export declare enum CLIST_STATUS_ENUM {
    working = "working",
    published = "published"
}
export declare enum CLIST_AFUNCTIONS_ENUM {
    count = "count",
    min = "min",
    max = "max",
    avg = "avg",
    sum = "sum"
}
export declare enum SUPPORTED_LANG_ENUM {
    ru = "ru",
    en = "en",
    it = "it"
}
