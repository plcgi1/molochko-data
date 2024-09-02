import * as dataEnums from './enums';
import * as typeDefinitions from './types';
import * as _rolePermissions from './role-permissions';
import * as _animalForEventFilters from './event';
export declare const enums: {
    BREED: typeDefinitions.EnumItem[];
    BREED_AS_OBJECT: typeDefinitions.EnumArrayAsObject;
    BCRYPT_SALT: number;
    SYSTEM_USER_ROLES_ENUM: typeof dataEnums.SYSTEM_USER_ROLES_ENUM;
    SYSTEM_USER_ROLES_AS_OBJECT: {
        [key: string]: string;
    };
    USER_STATUSES_ENUM: typeof dataEnums.USER_STATUSES_ENUM;
    USER_STATUSES_AS_OBJECT: {
        [key: string]: string;
    };
    ORG_TYPE_ENUM: typeof dataEnums.ORG_TYPE_ENUM;
    ORG_TYPE_AS_OBJECT: {
        [key: string]: string;
    };
    TOKEN_TYPE_ENUM: typeof dataEnums.TOKEN_TYPE_ENUM;
    TOKEN_TYPES_AS_OBJECT: {
        [key: string]: string;
    };
    ANIMAL_GENDER_ENUM: typeof dataEnums.ANIMAL_GENDER_ENUM;
    ANIMAL_GENDER_AS_OBJECT: {
        [key: string]: string;
    };
    EVENT_TYPES_ENUM: typeof dataEnums.EVENT_TYPES_ENUM;
    EVENT_TYPES_AS_OBJECT: {
        [key: string]: string;
    };
    SEED_TYPE_ENUM: typeof dataEnums.SEED_TYPE_ENUM;
    SEED_TYPE_AS_OBJECT: {
        [key: string]: string;
    };
    SEED_STATUS_ENUM: typeof dataEnums.SEED_STATUS_ENUM;
    SEED_STATUS_AS_OBJECT: {
        [key: string]: string;
    };
    SEED_CODES_ENUM: typeof dataEnums.SEED_CODES_ENUM;
    SEED_CODES_AS_OBJECT: {
        [key: string]: string;
    };
    ANIMAL_STATUS_ENUM: typeof dataEnums.ANIMAL_STATUS_ENUM;
    BULL_STATUS: typeof dataEnums.BULL_STATUS;
    COW_STATUS: typeof dataEnums.COW_STATUS;
    ANIMAL_STATUS_AS_OBJECT: {
        [key: string]: string;
    };
    EVENT_ERROR_REASON_ENUM: typeof dataEnums.EVENT_ERROR_REASON_ENUM;
    EVENT_ERROR_REASON_AS_OBJECT: {
        [key: string]: string;
    };
    COMMON_SIMPLE_STATUS_ENUM: typeof dataEnums.COMMON_SIMPLE_STATUS_ENUM;
    COMMON_SIMPLE_STATUS_AS_OBJECT: {
        [key: string]: string;
    };
    TAG_TYPE_ENUM: typeof dataEnums.TAG_TYPE_ENUM;
    TAG_TYPE_AS_OBJECT: {
        [key: string]: string;
    };
    USER_PERMISSION_ENUM: typeof dataEnums.USER_PERMISSION_ENUM;
    USER_PERMISSION_AS_OBJECT: {
        [key: string]: string;
    };
    USER_PERMISSION_METHOD_ENUM: typeof dataEnums.USER_PERMISSION_METHOD_ENUM;
    USER_PERMISSION_METHOD_AS_OBJECT: {
        [key: string]: string;
    };
    ACCESS_ENUM: typeof dataEnums.ACCESS_ENUM;
    ACCESS_ENUM_AS_OBJECT: {
        [key: string]: string;
    };
    TRANSFEROUT_TYPES_ENUM: typeof dataEnums.TRANSFEROUT_TYPES_ENUM;
    TRANSFEROUT_TYPES_AS_OBJECT: {
        [key: string]: string;
    };
    TRANSFEROUT_REASON_ENUM: typeof dataEnums.TRANSFEROUT_REASON_ENUM;
    TRANSFEROUT_REASON_AS_OBJECT: {
        [key: string]: string;
    };
    DISEASES_ENUM: typeof dataEnums.DISEASES_ENUM;
    DISEASES_AS_OBJECT: {
        [key: string]: string;
    };
    MEDMETHOD_ENUM: typeof dataEnums.MEDMETHOD_ENUM;
    MEDMETHOD_ENUM_AS_OBJECT: {
        [key: string]: string;
    };
    SUBTASK_STATUS_ENUM: typeof dataEnums.SUBTASK_STATUS_ENUM;
    SUBTASK_STATUS_AS_OBJECT: {
        [key: string]: string;
    };
    EVENT_EXEC_STATUS_ENUM: typeof dataEnums.EVENT_EXEC_STATUS_ENUM;
    EVENT_EXEC_STATUS_AS_OBJECT: {
        [key: string]: string;
    };
    REPORT_OPERATOR_ENUM: {
        eq: string;
        gte: string;
        lte: string;
        lt: string;
        gt: string;
    };
    REPORT_OPERATOR_ENUM_AS_OBJECT: {
        [key: string]: string;
    };
    REPORT_TYPE_ENUM: {
        string: string;
        number: string;
        date: string;
        datetime: string;
    };
    REPORT_TYPE_ENUM_AS_OBJECT: {
        [key: string]: string;
    };
    REPORT_CONDITION_ENUM: {
        and: string;
        or: string;
    };
    REPORT_CONDITION_ENUM_AS_OBJECT: {
        [key: string]: string;
    };
    REPORT_DATASOURCE_ENUM: {
        animals: string;
        events: string;
    };
    REPORT_DATASOURCE_ENUM_AS_OBJECT: {
        [key: string]: string;
    };
};
export declare const rolePermissions: typeof _rolePermissions;
export declare const types: typeof typeDefinitions;
export declare const animalForEventFilters: typeof _animalForEventFilters;
