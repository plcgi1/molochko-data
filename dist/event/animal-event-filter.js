"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const enums_1 = require("../enums");
const date_1 = require("../helpers/date");
/*

const filtered = filter(animals, eventType)

*/
class AnimalEventFilter {
    constructor() {
        this.status = enums_1.COW_STATUS;
        this.defaultCowAge = 12;
    }
    ageFilter(animal, availableMinAge /*month*/) {
        const months = (0, date_1.getMonthFromDate)(animal.dob.toISOString());
        return months > availableMinAge;
    }
    statusFilter(animal, availableStatuses) {
        return availableStatuses.includes(animal.status);
    }
    genderFilter(animal, availableGender) {
        return animal.gender === availableGender;
    }
    abortFilter(animals) {
        const result = animals.filter((animal) => this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow));
        return result;
    }
    neosemFilter(animals) {
        return this.abortFilter(animals);
    }
    osemenenieFilter(animals) {
        const result = animals.filter((animal) => {
            const genderOk = this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
            const statusOk = this.statusFilter(animal, [
                this.status.HEIFER,
                this.status.BRED,
                this.status.OPEN,
                this.status.FRESH,
            ]);
            const ageOk = this.ageFilter(animal, this.defaultCowAge);
            if (genderOk && statusOk && ageOk) {
                return animal;
            }
        });
        return result;
    }
    otelFilter(animals) {
        const result = animals.filter((animal) => {
            const genderOk = this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
            const statusOk = this.statusFilter(animal, [this.status.DRY, this.status.PREGNANT]);
            const ageOk = this.ageFilter(animal, this.defaultCowAge);
            if (genderOk && statusOk && ageOk) {
                return animal;
            }
        });
        return result;
    }
    recheckFilter(animals) {
        const result = animals.filter((animal) => {
            const genderOk = this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
            const ageOk = this.ageFilter(animal, this.defaultCowAge);
            let availableStatus = [this.status.BRED, this.status.PREGNANT, this.status.DRY];
            if (animal.animalEventRelation) {
                const previousRechecks = animal.animalEventRelation.filter((row) => {
                    return row.eventDetail.type === enums_1.EVENT_TYPES_ENUM.recheck;
                });
                if (previousRechecks.length == 0) {
                    availableStatus = [this.status.BRED];
                }
            }
            const statusOk = this.statusFilter(animal, availableStatus);
            if (genderOk && statusOk && ageOk) {
                return animal;
            }
        });
        return result;
    }
    suhostoiFilter(animals) {
        return this.abortFilter(animals);
    }
    pozSuhostoiFilter(animals) {
        const result = animals.filter((animal) => {
            const genderOk = this.genderFilter(animal, enums_1.ANIMAL_GENDER_ENUM.cow);
            const statusOk = this.statusFilter(animal, [this.status.DRY]);
            const ageOk = this.ageFilter(animal, this.defaultCowAge);
            if (genderOk && statusOk && ageOk) {
                return animal;
            }
        });
        return result;
    }
    transferOutFilter(animals) {
        return animals;
    }
    perevodFilter(animals) {
        return animals;
    }
    treatmentFilter(animals) {
        return animals;
    }
    filter(animals, eventType) {
        switch (eventType) {
            case enums_1.EVENT_TYPES_ENUM.abort:
                return this.abortFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.neosem:
                return this.neosemFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.osemenenie:
                return this.osemenenieFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.otel:
                return this.otelFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.recheck:
                return this.recheckFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.suhostoi:
                return this.suhostoiFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.pozSuhostoi:
                return this.pozSuhostoiFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.perevod:
                return this.perevodFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.transferOut:
                return this.transferOutFilter(animals);
            case enums_1.EVENT_TYPES_ENUM.treatment:
                return this.treatmentFilter(animals);
            default:
                return animals;
        }
    }
}
const f = new AnimalEventFilter();
function filter(animals, eventType) {
    return f.filter(animals, eventType);
}
exports.filter = filter;
