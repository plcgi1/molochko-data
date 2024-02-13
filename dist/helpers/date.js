"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthFromDate = void 0;
const moment_1 = __importDefault(require("moment"));
const getMonthFromDate = (dateString) => {
    const result = (0, moment_1.default)().diff(dateString, 'months');
    return result;
};
exports.getMonthFromDate = getMonthFromDate;
