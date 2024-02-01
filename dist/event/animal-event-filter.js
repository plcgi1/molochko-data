"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalForEventFilter = void 0;
const enums_1 = require("../enums");
const date_1 = require("../helpers/date");
const status = enums_1.ANIMAL_STATUS_ENUM;
const defaultCowAge = 12;
class AnimalForEventFilter {
    constructor(animals, eventType) {
        this.animals = animals;
        this.eventType = eventType;
    }
    genderFilter(animal, availableGender) {
        if (animal.gender === availableGender) {
            return true;
        }
        return false;
    }
    ageFilter(animal, availableMinAge /*month*/) {
        const months = (0, date_1.getMonthFromDate)(animal.dob.toISOString());
        if (months > availableMinAge) {
            return true;
        }
        return false;
    }
    statusFilter(animal, availableStatuses) {
        if (availableStatuses.includes(animal.status)) {
            return true;
        }
        return false;
    }
    abortFilter() {
        const result = [];
        this.animals.forEach(animal => {
            if (this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow)) {
                result.push(animal);
            }
        });
        return result;
    }
    neosemFilter() {
        return this.abortFilter();
    }
    osemenenieFilter() {
        const result = [];
        this.animals.forEach(animal => {
            let genderOk = false;
            let statusOk = false;
            let ageOk = false;
            if (this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow)) {
                genderOk = true;
            }
            if (this.statusFilter(animal, [status.heifer, status.bred, status.open, status.fresh])) {
                statusOk = true;
            }
            if (this.ageFilter(animal, defaultCowAge)) {
                ageOk = true;
            }
            if (genderOk && statusOk && ageOk) {
                result.push(animal);
            }
        });
        return result;
    }
    otelFilter() {
        const result = [];
        this.animals.forEach(animal => {
            let genderOk = false;
            let statusOk = false;
            let ageOk = false;
            if (this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow)) {
                genderOk = true;
            }
            if (this.statusFilter(animal, [status.dry, status.pregnant])) {
                statusOk = true;
            }
            if (this.ageFilter(animal, defaultCowAge)) {
                ageOk = true;
            }
            if (genderOk && statusOk && ageOk) {
                result.push(animal);
            }
        });
        return result;
    }
    recheckFilter() {
        const result = [];
        this.animals.forEach(animal => {
            let genderOk = false;
            let statusOk = false;
            let ageOk = false;
            if (this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow)) {
                genderOk = true;
            }
            if (this.ageFilter(animal, defaultCowAge)) {
                ageOk = true;
            }
            let availableStatus = [status.bred, status.pregnant, status.dry];
            if (animal.animalEventRelation) {
                const previousRechecks = animal.animalEventRelation.filter((row) => {
                    return row.eventDetail.type === enums_1.EVENT_TYPES_ENUM.recheck;
                });
                if (previousRechecks.length == 0) {
                    availableStatus = [status.bred];
                }
            }
            if (this.statusFilter(animal, availableStatus)) {
                statusOk = true;
            }
            if (genderOk && statusOk && ageOk) {
                result.push(animal);
            }
        });
        return result;
    }
    suhostoiFilter() {
        return this.abortFilter();
    }
    pozSuhostoiFilter() {
        const result = [];
        this.animals.forEach(animal => {
            let genderOk = false;
            let statusOk = false;
            let ageOk = false;
            if (this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow)) {
                genderOk = true;
            }
            if (this.statusFilter(animal, [status.dry])) {
                statusOk = true;
            }
            if (this.ageFilter(animal, defaultCowAge)) {
                ageOk = true;
            }
            if (genderOk && statusOk && ageOk) {
                result.push(animal);
            }
        });
        return result;
    }
    filter() {
        switch (this.eventType) {
            case enums_1.EVENT_TYPES_ENUM.abort:
                return this.abortFilter();
            case enums_1.EVENT_TYPES_ENUM.neosem:
                return this.neosemFilter();
            case enums_1.EVENT_TYPES_ENUM.osemenenie:
                return this.osemenenieFilter();
            case enums_1.EVENT_TYPES_ENUM.otel:
                return this.otelFilter();
            case enums_1.EVENT_TYPES_ENUM.recheck:
                return this.recheckFilter();
            case enums_1.EVENT_TYPES_ENUM.suhostoi:
                return this.suhostoiFilter();
            case enums_1.EVENT_TYPES_ENUM.pozSuhostoi:
                return this.pozSuhostoiFilter();
            case enums_1.EVENT_TYPES_ENUM.perevod:
                return this.animals;
            default:
                throw new Error(`AnimalForEventFilter.filter.${this.eventType} not implemented`);
        }
    }
}
exports.AnimalForEventFilter = AnimalForEventFilter;
