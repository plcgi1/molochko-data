"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumToObject = exports.asObject = void 0;
function asObject(arrayOfObjects) {
    const result = {};
    arrayOfObjects.forEach((item) => {
        result[item.id] = item.id;
    });
    return result;
}
exports.asObject = asObject;
function enumToObject(e) {
    // { [key: string]: string };
    const result = Object.keys(e).reduce((obj, key) => {
        // TypeScript перечисления имеют обратные свойства для обеспечения обратной совместимости
        // Проверяем, что ключ является числом и пропускаем эти ключи
        if (!isNaN(Number(key))) {
            return obj;
        }
        // @ts-expect-error: skip
        obj[key] = e[key];
        return obj;
    }, {});
    return result;
}
exports.enumToObject = enumToObject;
