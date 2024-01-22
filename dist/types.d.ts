import { USER_PERMISSION_ENUM, USER_PERMISSION_METHOD_ENUM, EVENT_TYPES_ENUM, ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM } from './enums';
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
    status: ANIMAL_STATUS_ENUM;
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
