import { SYSTEM_USER_ROLES_ENUM, USER_PERMISSION_ENUM, USER_PERMISSION_METHOD_ENUM } from './enums'
import { IRolePermissionItem } from './types'

export const ROOT_PERMISSIONS: IRolePermissionItem[] = [
	{
		name: "*",
	},
]
export const USER_PERMISSIONS: IRolePermissionItem[] = [
    {
        name: "org",
        frontend: {
            path: "/main/company"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.create,
                method: USER_PERMISSION_METHOD_ENUM.post,
                paths: ["/api/org"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/org/list", "/api/org/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.update,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/org/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.delete,
                method: USER_PERMISSION_METHOD_ENUM.delete,
                paths: ["/api/org/:id"]
            }
        ]
    },
    {
        name: "employees",
        frontend: {
            path: "/main/employees"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/users/list"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.create,
                method: USER_PERMISSION_METHOD_ENUM.post,
                paths: ["/api/users/by-admin"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.update,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/users/by-admin/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.delete,
                method: USER_PERMISSION_METHOD_ENUM.delete,
                paths: ["/api/users/by-admin/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.deleteAll,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/users/remove"]
            }
        ]
    },
    {
        name: "seed-bank",
        frontend: {
            path: "/main/seed-bank"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/seed-bank/list"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/seed-bank/:naab"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.create,
                method: USER_PERMISSION_METHOD_ENUM.post,
                paths: ["/api/seed-bank"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.update,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/seed-bank/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.delete,
                method: USER_PERMISSION_METHOD_ENUM.delete,
                paths: ["/api/seed-bank/:id"]
            }
        ]
    },
    {
        name: "tags",
        frontend: {
            path: "/main/tags"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.create,
                method: USER_PERMISSION_METHOD_ENUM.post,
                paths: ["/api/animal-tag"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.update,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/animal-tag/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.delete,
                method: USER_PERMISSION_METHOD_ENUM.delete,
                paths: ["/api/animal-tag/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/animal-tag/list"]
            }
        ]
    },
    {
        name: "animal",
        frontend: {
            path: "/main/animals"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.create,
                method: USER_PERMISSION_METHOD_ENUM.post,
                paths: ["/api/animal"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.update,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/animal/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.delete,
                method: USER_PERMISSION_METHOD_ENUM.delete,
                paths: ["/api/animal/:id"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/animal/list"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.attach,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/animal/to-tag"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.detach,
                method: USER_PERMISSION_METHOD_ENUM.delete,
                paths: ["/api/animal/from-tag/:animalId"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.deleteAll,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/animals/remove"]
            }
        ]
    },
    {
        name: "eventForAnimals",
        frontend: {
            path: "/main/animals"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.create,
                method: USER_PERMISSION_METHOD_ENUM.post,
                paths: ["/api/event"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.deleteAll,
                method: USER_PERMISSION_METHOD_ENUM.put,
                paths: ["/api/event/remove"]
            }
        ]
    },
    {
        name: "event",
        frontend: {
            path: "/main/events-history"
        },
        backend: [
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/event/list"]
            },
            {
                active: true,
                permission: USER_PERMISSION_ENUM.view,
                method: USER_PERMISSION_METHOD_ENUM.get,
                paths: ["/api/event/:id"]
            }
        ]
    }
]
