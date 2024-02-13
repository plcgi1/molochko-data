"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_PERMISSIONS = exports.ROOT_PERMISSIONS = void 0;
const enums_1 = require("./enums");
exports.ROOT_PERMISSIONS = [
    {
        name: '*',
    },
];
exports.USER_PERMISSIONS = [
    {
        name: 'org',
        frontend: {
            active: true,
            path: '/main/company',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/org'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/org/list', '/api/org/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.update,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/org/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.delete,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/org/{id}'],
            },
        ],
    },
    {
        name: 'employees',
        frontend: {
            active: true,
            path: '/main/employees',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/users/list'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/users/by-admin'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.update,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/users/by-admin/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.delete,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/users/by-admin/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.deleteAll,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/users/remove'],
            },
        ],
    },
    {
        name: 'seed-bank',
        frontend: {
            active: true,
            path: '/main/seed-bank',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/seed-bank/list'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/seed-bank/{naab}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/seed-bank'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.update,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/seed-bank/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.delete,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/seed-bank/{id}'],
            },
        ],
    },
    {
        name: 'animal-tag',
        frontend: {
            active: true,
            path: '/main/tags',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/animal-tag'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.update,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/animal-tag/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.delete,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/animal-tag/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/animal-tag/list'],
            },
        ],
    },
    {
        name: 'animal',
        frontend: {
            active: true,
            path: '/main/animals',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/animal'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.update,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/animal/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.delete,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/animal/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/animal/list'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.attach,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/animal/to-tag'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.detach,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/animal/from-tag/{animalId}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.deleteAll,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/animals/remove'],
            },
        ],
    },
    {
        name: 'eventForAnimals',
        frontend: {
            active: true,
            path: '/main/animals',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/event'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.deleteAll,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/event/remove'],
            },
        ],
    },
    {
        name: 'event',
        frontend: {
            active: true,
            path: '/main/events-history',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/event/list'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/event/{id}'],
            },
        ],
    },
    {
        name: 'role-permissions',
        frontend: {
            active: true,
            path: '/main/role-permissions',
        },
        backend: [
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.view,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.get,
                paths: ['/api/role-permissions/list'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.create,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.post,
                paths: ['/api/role-permissions'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.update,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.put,
                paths: ['/api/role-permissions/{id}'],
            },
            {
                active: true,
                permission: enums_1.USER_PERMISSION_ENUM.delete,
                method: enums_1.USER_PERMISSION_METHOD_ENUM.delete,
                paths: ['/api/role-permissions/{id}'],
            },
        ],
    },
];
