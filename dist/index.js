"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqEnums = exports.eventEnums = exports.animalEnums = exports.animalForEventFilters = exports.importEnums = exports.animalTagEnums = exports.customListEnums = exports.types = exports.rolePermissions = exports.enums = void 0;
const dataEnums = __importStar(require("./enums"));
const breed_1 = require("./breed");
const typeDefinitions = __importStar(require("./types"));
const _rolePermissions = __importStar(require("./role-permissions"));
const _animalForEventFilters = __importStar(require("./event"));
const _clEnums = __importStar(require("./custom-list"));
const _importEnums = __importStar(require("./import-data"));
const _animalTagEnums = __importStar(require("./animal-tag"));
const _animalEnums = __importStar(require("./animals"));
const _eventEnums = __importStar(require("./event"));
const _eqEnums = __importStar(require("./easy-query"));
exports.enums = Object.assign(Object.assign({}, dataEnums), { BREED: breed_1.BREED, BREED_AS_OBJECT: breed_1.BREED_AS_OBJECT });
exports.rolePermissions = _rolePermissions;
exports.types = typeDefinitions;
exports.customListEnums = _clEnums.enums;
exports.animalTagEnums = _animalTagEnums.enums;
exports.importEnums = _importEnums.enums;
exports.animalForEventFilters = _animalForEventFilters;
exports.animalEnums = _animalEnums.enums;
exports.eventEnums = _eventEnums.enums;
exports.eqEnums = _eqEnums.enums;
