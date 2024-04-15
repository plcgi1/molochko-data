import { AnimalStatus, BaseAnimal } from '../types';
import { ANIMAL_GENDER_ENUM, COW_STATUS, EVENT_TYPES_ENUM } from '../enums';
import { getMonthFromDate } from '../helpers/date';

/*

const filtered = filter(animals, eventType)

*/

class AnimalEventFilter {
  status = COW_STATUS;
  defaultCowAge = 12;

  private ageFilter<T extends BaseAnimal>(animal: T, availableMinAge: number /*month*/): boolean {
    const months = getMonthFromDate(animal.dob.toISOString());
    return months > availableMinAge;
  }

  private statusFilter<T extends BaseAnimal>(
    animal: T,
    availableStatuses: AnimalStatus[],
  ): boolean {
    return availableStatuses.includes(animal.status);
  }

  private genderFilter<T extends BaseAnimal>(
    animal: T,
    availableGender: ANIMAL_GENDER_ENUM,
  ): boolean {
    return animal.gender === availableGender;
  }

  abortFilter<T extends BaseAnimal>(animals: T[]): T[] {
    const result: T[] = animals.filter((animal) =>
      this.genderFilter<T>(animal, ANIMAL_GENDER_ENUM.cow),
    );
    return result;
  }

  neosemFilter<T extends BaseAnimal>(animals: T[]): T[] {
    return this.abortFilter(animals);
  }

  osemenenieFilter<T extends BaseAnimal>(animals: T[]): T[] {
    const result = animals.filter((animal) => {
      const genderOk = this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
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

  otelFilter<T extends BaseAnimal>(animals: T[]): T[] {
    const result = animals.filter((animal) => {
      const genderOk = this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
      const statusOk = this.statusFilter(animal, [this.status.DRY, this.status.PREGNANT]);
      const ageOk = this.ageFilter(animal, this.defaultCowAge);

      if (genderOk && statusOk && ageOk) {
        return animal;
      }
    });
    return result;
  }

  recheckFilter<T extends BaseAnimal>(animals: T[]): T[] {
    const result = animals.filter((animal) => {
      const genderOk = this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
      const ageOk = this.ageFilter(animal, this.defaultCowAge);

      let availableStatus = [this.status.BRED, this.status.PREGNANT, this.status.DRY];
      if (animal.animalEventRelation) {
        const previousRechecks = animal.animalEventRelation.filter((row) => {
          return row.eventDetail.type === EVENT_TYPES_ENUM.recheck;
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

  suhostoiFilter<T extends BaseAnimal>(animals: T[]): T[] {
    return this.abortFilter(animals);
  }

  pozSuhostoiFilter<T extends BaseAnimal>(animals: T[]): T[] {
    const result = animals.filter((animal) => {
      const genderOk = this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow);
      const statusOk = this.statusFilter(animal, [this.status.DRY]);
      const ageOk = this.ageFilter(animal, this.defaultCowAge);

      if (genderOk && statusOk && ageOk) {
        return animal;
      }
    });
    return result;
  }

  transferOutFilter<T extends BaseAnimal>(animals: T[]): T[] {
    return animals;
  }

  perevodFilter<T extends BaseAnimal>(animals: T[]) {
    return animals;
  }

  treatmentFilter<T extends BaseAnimal>(animals: T[]) {
    return animals;
  }

  filter<T extends BaseAnimal>(animals: T[], eventType: EVENT_TYPES_ENUM) {
    switch (eventType) {
      case EVENT_TYPES_ENUM.abort:
        return this.abortFilter(animals);
      case EVENT_TYPES_ENUM.neosem:
        return this.neosemFilter(animals);
      case EVENT_TYPES_ENUM.osemenenie:
        return this.osemenenieFilter(animals);
      case EVENT_TYPES_ENUM.otel:
        return this.otelFilter(animals);
      case EVENT_TYPES_ENUM.recheck:
        return this.recheckFilter(animals);
      case EVENT_TYPES_ENUM.suhostoi:
        return this.suhostoiFilter(animals);
      case EVENT_TYPES_ENUM.pozSuhostoi:
        return this.pozSuhostoiFilter(animals);
      case EVENT_TYPES_ENUM.perevod:
        return this.perevodFilter(animals);
      case EVENT_TYPES_ENUM.transferOut:
        return this.transferOutFilter(animals);
      case EVENT_TYPES_ENUM.treatment:
        return this.treatmentFilter(animals);
      default:
        return animals;
    }
  }
}

const f = new AnimalEventFilter();

export function filter<T extends BaseAnimal>(animals: T[], eventType: EVENT_TYPES_ENUM) {
  return f.filter(animals, eventType);
}
