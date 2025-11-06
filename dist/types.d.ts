import { USER_PERMISSION_ENUM, USER_PERMISSION_METHOD_ENUM, ANIMAL_GENDER_ENUM, COW_STATUS, BULL_STATUS } from './enums';
import { EVENT_TYPES_ENUM } from "./event";
export interface EnumItem {
    readonly id: string;
    readonly label: string;
    readonly color?: string;
}
export declare type EnumArrayAsObject = {
    [key: string]: string;
};
export interface IBackendRolePermissionItem {
    active: boolean;
    permission: USER_PERMISSION_ENUM;
    method: USER_PERMISSION_METHOD_ENUM;
    paths: string[];
}
export interface IRolePermissionItem {
    name: string;
    frontend?: {
        active: boolean;
        path: string;
    };
    backend?: IBackendRolePermissionItem[];
}
export interface IAnimal {
    id: string;
    orgId: string;
    name: string;
    animalId: string;
    isoId: string;
    regId: string;
    activometrId: string;
    status: AnimalStatus;
    gender: ANIMAL_GENDER_ENUM;
    dob: Date;
    breed?: string;
    tags?: number[];
    searchTag?: string;
    animalEventRelation?: IAnimalEventRelation[];
}
export interface IAnimalEventRelation {
    eventDetail: IEventDetail;
}
export interface IEventDetail {
    type: EVENT_TYPES_ENUM;
}
export declare type AnimalStatus = COW_STATUS | BULL_STATUS;
export declare type BaseAnimal = {
    id: string;
    dob: Date;
    gender: ANIMAL_GENDER_ENUM;
    status: AnimalStatus;
    animalEventRelation?: IAnimalEventRelation[];
};
