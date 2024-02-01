import { IAnimal } from '../types';
import { ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM, EVENT_TYPES_ENUM } from '../enums';
export declare class AnimalForEventFilter {
    animals: IAnimal[];
    eventType: EVENT_TYPES_ENUM;
    constructor(animals: IAnimal[], eventType: EVENT_TYPES_ENUM);
    genderFilter(animal: IAnimal, availableGender: ANIMAL_GENDER_ENUM): Boolean;
    ageFilter(animal: IAnimal, availableMinAge: number): Boolean;
    statusFilter(animal: IAnimal, availableStatuses: ANIMAL_STATUS_ENUM[]): Boolean;
    abortFilter(): IAnimal[];
    neosemFilter(): IAnimal[];
    osemenenieFilter(): IAnimal[];
    otelFilter(): IAnimal[];
    recheckFilter(): IAnimal[];
    suhostoiFilter(): IAnimal[];
    pozSuhostoiFilter(): IAnimal[];
    filter(): IAnimal[];
}
