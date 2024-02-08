import { IAbstractAnimal } from '../types';
import { EVENT_TYPES_ENUM } from '../enums';
export declare function filter<T extends IAbstractAnimal>(animals: T[], eventType: EVENT_TYPES_ENUM): T[];
