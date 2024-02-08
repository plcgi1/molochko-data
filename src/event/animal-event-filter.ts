import { AnimalStatus, BaseAnimal } from "../types";
import {
  ANIMAL_GENDER_ENUM,
  ANIMAL_STATUS_ENUM,
  COW_STATUS,
  EVENT_TYPES_ENUM,
} from "../enums";
import { getMonthFromDate } from "../helpers/date";

const status = COW_STATUS;

const defaultCowAge = 12;

/*

const filtered = filter(animals, eventType)

*/

function ageFilter<T extends BaseAnimal>(
  animal: T,
  availableMinAge: number /*month*/
): boolean {
  const months = getMonthFromDate(animal.dob.toISOString());
  return months > availableMinAge;
}

function statusFilter<T extends BaseAnimal>(
  animal: T,
  availableStatuses: AnimalStatus[]
): boolean {
  return availableStatuses.includes(animal.status);
}

function genderFilter<T extends BaseAnimal>(
  animal: T,
  availableGender: ANIMAL_GENDER_ENUM
): boolean {
  return animal.gender === availableGender;
}

function abortFilter<T extends BaseAnimal>(animals: T[]): T[] {
  const result: T[] = animals.filter((animal) =>
    genderFilter<T>(animal, ANIMAL_GENDER_ENUM.cow)
  );
  return result;
}

function neosemFilter<T extends BaseAnimal>(animals: T[]): T[] {
  return abortFilter(animals);
}

function osemenenieFilter<T extends BaseAnimal>(animals: T[]): T[] {
  const result = animals.filter((animal) => {
    const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
    const statusOk = statusFilter(animal, [
      status.HEIFER,
      status.BRED,
      status.OPEN,
      status.FRESH,
    ]);
    const ageOk = ageFilter(animal, defaultCowAge);

    return genderOk && statusOk && ageOk && animal;
  });

  return result;
}

function otelFilter<T extends BaseAnimal>(animals: T[]): T[] {
  const result = animals.filter((animal) => {
    const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
    const statusOk = statusFilter(animal, [status.DRY, status.PREGNANT]);
    const ageOk = ageFilter(animal, defaultCowAge);

    return genderOk && statusOk && ageOk && animal;
  });
  return result;
}

function recheckFilter<T extends BaseAnimal>(animals: T[]): T[] {
  const result = animals.filter((animal) => {
    const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
    const ageOk = ageFilter(animal, defaultCowAge);

    let availableStatus = [status.BRED, status.PREGNANT, status.DRY];
    if (animal.animalEventRelation) {
      const previousRechecks = animal.animalEventRelation.filter((row) => {
        return row.eventDetail.type === EVENT_TYPES_ENUM.recheck;
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

function suhostoiFilter<T extends BaseAnimal>(animals: T[]): T[] {
  return abortFilter(animals);
}

function pozSuhostoiFilter<T extends BaseAnimal>(animals: T[]): T[] {
  const result = animals.filter((animal) => {
    const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
    const statusOk = statusFilter(animal, [status.DRY]);
    const ageOk = ageFilter(animal, defaultCowAge);

    return genderOk && statusOk && ageOk && animal;
  });
  return result;
}

function transferOutFilter<T extends BaseAnimal>(animals: T[]): T[] {
  return animals;
}

function perevodFilter<T extends BaseAnimal>(animals: T[]) {
  return animals;
}

interface IFilters<T extends BaseAnimal> {
  [key: string]: (animals: T[]) => T[];
}

export function filter<T extends BaseAnimal>(
  animals: T[],
  eventType: EVENT_TYPES_ENUM
) {
  const filters: IFilters<T> = {
    [EVENT_TYPES_ENUM.abort]: abortFilter,
    [EVENT_TYPES_ENUM.neosem]: neosemFilter,
    [EVENT_TYPES_ENUM.osemenenie]: osemenenieFilter,
    [EVENT_TYPES_ENUM.otel]: otelFilter,
    [EVENT_TYPES_ENUM.recheck]: recheckFilter,
    [EVENT_TYPES_ENUM.suhostoi]: suhostoiFilter,
    [EVENT_TYPES_ENUM.pozSuhostoi]: pozSuhostoiFilter,
    [EVENT_TYPES_ENUM.perevod]: perevodFilter,
    [EVENT_TYPES_ENUM.transferOut]: transferOutFilter,
  };
  try {
    const result = filters[eventType](animals);
    return result;
  } catch (err) {
    throw new Error(`AnimalForEventFilter.filter.${eventType} not implemented`);
  }
}
