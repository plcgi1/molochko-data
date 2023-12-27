import { USER_PERMISSION_ENUM, USER_PERMISSION_METHOD_ENUM } from './enums';
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
        path: string;
    };
    backend?: IBackendRolePermissionItem[];
}
