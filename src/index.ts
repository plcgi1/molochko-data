import * as dataEnums from './enums';
import { BREED, BREED_AS_OBJECT } from './breed';
import * as typeDefinitions from './types';
import * as _rolePermissions from './role-permissions';
import * as _animalForEventFilters from './event';
import * as _clEnums from './custom-list';
import * as _importEnums from './import-data';
import * as _animalTagEnums from './animal-tag';

export const enums = { ...dataEnums, BREED, BREED_AS_OBJECT };
export const rolePermissions = _rolePermissions;
export const types = typeDefinitions;
export const customListEnums = _clEnums.enums;
export const animalTagEnums = _animalTagEnums.enums;
export const importEnums = _importEnums.enums;
export const animalForEventFilters = _animalForEventFilters;
