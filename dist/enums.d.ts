export declare const BCRYPT_SALT: number;
export declare enum SYSTEM_USER_ROLES_ENUM {
    user = "user",
    admin = "admin",
    root = "root"
}
export declare const SYSTEM_USER_ROLES_AS_OBJECT: {
    [key: string]: string;
};
export declare enum USER_STATUSES_ENUM {
    waiting = "waiting",
    ready = "ready",
    blocked = "blocked",
    deleted = "deleted"
}
export declare const USER_STATUSES_AS_OBJECT: {
    [key: string]: string;
};
export declare enum ORG_TYPE_ENUM {
    org = "org",
    location = "location"
}
export declare const ORG_TYPE_AS_OBJECT: {
    [key: string]: string;
};
export declare enum TOKEN_TYPE_ENUM {
    confirm = "confirm",
    auth = "auth",
    refresh = "refresh",
    resetPassword = "resetPassword",
    invite = "invite"
}
export declare const TOKEN_TYPES_AS_OBJECT: {
    [key: string]: string;
};
export declare enum ANIMAL_GENDER_ENUM {
    cow = "cow",
    bull = "bull"
}
export declare const ANIMAL_GENDER_AS_OBJECT: {
    [key: string]: string;
};
export declare enum EVENT_TYPES_ENUM {
    otel = "otel",
    recheck = "recheck",
    ohota = "ohota",
    osemenenie = "osemenenie",
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
    transferOut = "transferOut"
}
export declare const EVENT_TYPES_AS_OBJECT: {
    [key: string]: string;
};
export declare enum SEED_TYPE_ENUM {
    traditional = "traditional",
    sexytelka = "sexytelka",
    sexybull = "sexybull",
    meat = "meat",
    meatSexyTelka = "meatSexyTelka",
    meatSexyBull = "meatSexyBull"
}
export declare const SEED_TYPE_AS_OBJECT: {
    [key: string]: string;
};
export declare enum SEED_STATUS_ENUM {
    active = "active",
    notActive = "notActive"
}
export declare const SEED_STATUS_AS_OBJECT: {
    [key: string]: string;
};
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
export declare const SEED_CODES_AS_OBJECT: {
    [key: string]: string;
};
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
export declare const ANIMAL_STATUS_AS_OBJECT: {
    [key: string]: string;
};
export declare enum EVENT_ERROR_REASON_ENUM {
    statusNotAllowed = "animal-status-not-allowed",
    statusNotAllowedPregnant = "animal-status-not-allowed-pregnant",
    statusNotAllowedDry = "animal-status-not-allowed-dry",
    statusNotAllowedDnb = "animal-status-not-allowed-dnb",
    statusNotAllowedSold = "animal-status-not-allowed-sold",
    statusNotAllowedDied = "animal-status-not-allowed-died",
    statusNotAllowedBred = "animal-status-not-allowed-bred",
    statusNotAllowedFresh = "animal-status-not-allowed-fresh",
    statusNotAllowedHeifer = "animal-status-not-allowed-heifer",
    statusNotAllowedOpen = "animal-status-not-allowed-open",
    statusForFirstRecheckBredOnly = "animal-status-for-first-recheck-bred-only",
    notACow = "animal-not-a-cow",
    tooYoung = "animal-too-young"
}
export declare const EVENT_ERROR_REASON_AS_OBJECT: {
    [key: string]: string;
};
export declare enum COMMON_SIMPLE_STATUS_ENUM {
    failed = "failed",
    success = "success"
}
export declare const COMMON_SIMPLE_STATUS_AS_OBJECT: {
    [key: string]: string;
};
export declare enum TAG_TYPE_ENUM {
    user = "user",
    system = "system",
    event = "event"
}
export declare const TAG_TYPE_AS_OBJECT: {
    [key: string]: string;
};
export declare enum USER_PERMISSION_ENUM {
    view = "view",
    create = "create",
    update = "update",
    delete = "delete",
    deleteAll = "deleteAll",
    attach = "attach",
    detach = "detach"
}
export declare const USER_PERMISSION_AS_OBJECT: {
    [key: string]: string;
};
export declare enum USER_PERMISSION_METHOD_ENUM {
    post = "POST",
    put = "PUT",
    delete = "DELETE",
    get = "GET",
    patch = "PATCH"
}
export declare const USER_PERMISSION_METHOD_AS_OBJECT: {
    [key: string]: string;
};
export declare enum ACCESS_ENUM {
    read = "read",
    write = "write"
}
export declare const ACCESS_ENUM_AS_OBJECT: {
    [key: string]: string;
};
export declare enum TRANSFEROUT_TYPES_ENUM {
    transferOut = "transferOut",
    died = "died"
}
export declare const TRANSFEROUT_TYPES_AS_OBJECT: {
    [key: string]: string;
};
export declare enum TRANSFEROUT_REASON_ENUM {
    leikoz = "leikoz",
    tuberkulez = "tuberkulez",
    klostirikoz = "klostirikoz",
    nekrobacilez = "nekrobacilez",
    aktinomikoz = "aktinomikoz",
    ginekologic = "ginekologic",
    metabolicDisorders = "metabolicDisorders",
    Infertility = "infertility",
    udderDiseases = "udderDiseases",
    lameness = "lameness",
    breedingSales = "breedingSales",
    salesToThePublic = "salesToThePublic",
    theft = "theft",
    dead = "dead"
}
export declare const TRANSFEROUT_REASON_AS_OBJECT: {
    [key: string]: string;
};
