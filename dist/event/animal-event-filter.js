"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const enums_1 = require("../enums");
const date_1 = require("../helpers/date");
const status = enums_1.COW_STATUS;
const defaultCowAge = 12;
/*

const filtered = filter(animals, eventType)

*/
function ageFilter(animal, availableMinAge /*month*/) {
    const months = (0, date_1.getMonthFromDate)(animal.dob.toISOString());
    return months > availableMinAge;
}
function statusFilter(animal, availableStatuses) {
    return availableStatuses.includes(animal.status);
}
function genderFilter(animal, availableGender) {
    return animal.gender === availableGender;
}
function abortFilter(animals) {
    const result = animals.filter((animal) => genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow));
    return result;
}
function neosemFilter(animals) {
    return abortFilter(animals);
}
function osemenenieFilter(animals) {
    const result = animals.filter((animal) => {
        const genderOk = genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
        const statusOk = statusFilter(animal, [status.HEIFER, status.BRED, status.OPEN, status.FRESH]);
        const ageOk = ageFilter(animal, defaultCowAge);
        return genderOk && statusOk && ageOk && animal;
    });
    return result;
}
function otelFilter(animals) {
    const result = animals.filter((animal) => {
        const genderOk = genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
        const statusOk = statusFilter(animal, [status.DRY, status.PREGNANT]);
        const ageOk = ageFilter(animal, defaultCowAge);
        return genderOk && statusOk && ageOk && animal;
    });
    return result;
}
function recheckFilter(animals) {
    const result = animals.filter((animal) => {
        const genderOk = genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
        const ageOk = ageFilter(animal, defaultCowAge);
        let availableStatus = [status.BRED, status.PREGNANT, status.DRY];
        if (animal.animalEventRelation) {
            const previousRechecks = animal.animalEventRelation.filter((row) => {
                return row.eventDetail.type === enums_1.EVENT_TYPES_ENUM.recheck;
            });
            if (previousRechecks.length == 0) {
                availableStatus = [status.BRED];
            }
        }
        const statusOk = statusFilter(animal, availableStatus);
        return genderOk && statusOk && ageOk && animal;
    });
    return result;
}
function suhostoiFilter(animals) {
    return abortFilter(animals);
}
function pozSuhostoiFilter(animals) {
    const result = animals.filter((animal) => {
        const genderOk = genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
        const statusOk = statusFilter(animal, [status.DRY]);
        const ageOk = ageFilter(animal, defaultCowAge);
        return genderOk && statusOk && ageOk && animal;
    });
    return result;
}
function transferOutFilter(animals) {
    return animals;
}
function perevodFilter(animals) {
    return animals;
}
function filter(animals, eventType) {
    const filters = {
        [enums_1.EVENT_TYPES_ENUM.abort]: abortFilter,
        [enums_1.EVENT_TYPES_ENUM.neosem]: neosemFilter,
        [enums_1.EVENT_TYPES_ENUM.osemenenie]: osemenenieFilter,
        [enums_1.EVENT_TYPES_ENUM.otel]: otelFilter,
        [enums_1.EVENT_TYPES_ENUM.recheck]: recheckFilter,
        [enums_1.EVENT_TYPES_ENUM.suhostoi]: suhostoiFilter,
        [enums_1.EVENT_TYPES_ENUM.pozSuhostoi]: pozSuhostoiFilter,
        [enums_1.EVENT_TYPES_ENUM.perevod]: perevodFilter,
        [enums_1.EVENT_TYPES_ENUM.transferOut]: transferOutFilter,
    };
    try {
        const result = filters[eventType](animals);
        return result;
    }
    catch (err) {
        throw new Error(`AnimalForEventFilter.filter.${eventType} not implemented`);
    }
}
exports.filter = filter;
