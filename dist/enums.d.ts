export declare const BCRYPT_SALT: number;
export declare enum SYSTEM_USER_ROLES_ENUM {
    user = "user",
    admin = "admin",
    root = "root"
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
export declare enum TRANSFEROUT_TYPES_ENUM {
    transferOut = "transferOut",
    died = "died"
}
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
export declare enum DISEASES_ENUM {
    PREVENTION = "prevention",
    VACCTINATION = "vaccination",
    MASTITIS = "mastitis",
    METRITIS = "metritis",
    PARESIS = "paresis",
    TEMPERATURE = "temperature",
    ABOMASUM_DISPLACEMENT = "abomasum_displacement",
    LAMENESS = "lameness",
    INJURY = "injury",
    DEHORNING = "dehorning",
    METABOLIC_DISEASE = "metabolic disease",
    DIARRHEA = "diarrhea",
    ATONY = "atony",
    PNEUMONIA = "pneumonia",
    TYMPANY = "tympany",
    HEALTHY = "healthy",
    KETOSIS = "ketosis",
    CONJUNCTEVITIS = "conjunctevitis",
    DIPEPSIA = "dipepsia",
    SYNCHRONIZATION = "synchronization",
    OTHER = "other"
}
export declare enum MEDMETHOD_ENUM {
    SUBCUTANEOUSLY = "subcutaneously",
    NASALLY = "nasally",
    INTRAMUSCULARLY = "intramuscularly",
    INTRACISTERNALLY = "intracesternally",
    ORALLY = "orally",
    INTRAVENOUSLY = "intravenously",
    INTRAUTERINE = "intrauterine",
    INTRAVAGINALLY = "intravaginally"
}
export declare enum EVENT_EXEC_STATUS_ENUM {
    waiting = "waiting",
    done = "done",
    cancel = "cancel",
    block = "block"
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
    en = "en"
}
