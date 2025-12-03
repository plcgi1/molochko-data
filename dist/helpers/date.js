"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datestrToDate = exports.getMonthFromDate = void 0;
const moment_1 = __importDefault(require("moment"));
const getMonthFromDate = (dateString) => {
    const result = (0, moment_1.default)().diff(dateString, 'months');
    return result;
};
exports.getMonthFromDate = getMonthFromDate;
/* преобразование строки 251201 в дату*/
function datestrToDate(dateStr) {
    const year = '20' + dateStr.substring(0, 2); // 2022
    const month = dateStr.substring(2, 4); // 12
    const day = dateStr.substring(4, 6); // 02
    // Создаем дату (месяцы в JS: 0-11)
    const date = new Date(`${year}-${month}-${day}`);
    return date;
}
exports.datestrToDate = datestrToDate;
