import { BaseAnimal } from "../types";
import { EVENT_TYPES_ENUM } from "../enums";
export declare function filter<T extends BaseAnimal>(animals: T[], eventType: EVENT_TYPES_ENUM): T[];
