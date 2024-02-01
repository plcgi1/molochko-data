import { IAnimal } from '../types';
import { ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM, EVENT_TYPES_ENUM } from '../enums';
import { getMonthFromDate } from '../helpers/date';

const status = ANIMAL_STATUS_ENUM

const defaultCowAge = 12

export class AnimalForEventFilter {
	animals: IAnimal[]
	eventType: EVENT_TYPES_ENUM

	constructor (animals: IAnimal[], eventType: EVENT_TYPES_ENUM) {
		this.animals = animals
		this.eventType = eventType
	}

	genderFilter (animal: IAnimal, availableGender: ANIMAL_GENDER_ENUM): Boolean {
		if (animal.gender === availableGender) {
			return true
		}
		return false
	}

	ageFilter (animal: IAnimal, availableMinAge: number /*month*/): Boolean {
		const months = getMonthFromDate(animal.dob.toISOString())
		if ( months > availableMinAge) {
			return true
		}
		return false
	}

	statusFilter (animal: IAnimal, availableStatuses: ANIMAL_STATUS_ENUM[]): Boolean {
		if (availableStatuses.includes(animal.status)) {
			return true
		}
		return false
	}

	abortFilter () {
		const result: IAnimal[] = []
		this.animals.forEach(animal => {
			if (this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow)) {
				result.push(animal)
			}
		})
		return result
	}

	neosemFilter () {
		return this.abortFilter()
	}

	osemenenieFilter() {
		const result: IAnimal[] = []
		this.animals.forEach(animal => {
			let genderOk = false
			let statusOk = false
			let ageOk = false

			if (this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow)) {
				genderOk = true
			}
			if (this.statusFilter(animal, [status.heifer, status.bred, status.open, status.fresh])) {
				statusOk = true
			}
			if (this.ageFilter(animal, defaultCowAge)) {
				ageOk = true
			}
			if (genderOk && statusOk && ageOk) {
				result.push(animal)
			}
		})
		return result
	}

	otelFilter () {
		const result: IAnimal[] = []
		this.animals.forEach(animal => {
			let genderOk = false
			let statusOk = false
			let ageOk = false

			if (this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow)) {
				genderOk = true
			}
			if (this.statusFilter(animal, [status.dry, status.pregnant])) {
				statusOk = true
			}
			if (this.ageFilter(animal, defaultCowAge)) {
				ageOk = true
			}
			if (genderOk && statusOk && ageOk) {
				result.push(animal)
			}
		})
		return result
	}

	recheckFilter () {
		const result: IAnimal[] = []
		this.animals.forEach(animal => {
			let genderOk = false
			let statusOk = false
			let ageOk = false

			if (this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow)) {
				genderOk = true
			}
			if (this.ageFilter(animal, defaultCowAge)) {
				ageOk = true
			}

			let availableStatus = [status.bred, status.pregnant, status.dry]
			if (animal.animalEventRelation) {
      	const previousRechecks = animal.animalEventRelation.filter((row) => {
					return row.eventDetail.type === EVENT_TYPES_ENUM.recheck
				})
				if (previousRechecks.length == 0) {
					availableStatus = [status.bred]
				}
			}
			if (this.statusFilter(animal, availableStatus)) {
				statusOk = true
			}
			if (genderOk && statusOk && ageOk) {
				result.push(animal)
			}
		})
		return result
	}

	suhostoiFilter () {
		return this.abortFilter()
	}

	pozSuhostoiFilter () {
		const result: IAnimal[] = []
		this.animals.forEach(animal => {
			let genderOk = false
			let statusOk = false
			let ageOk = false

			if (this.genderFilter(animal, ANIMAL_GENDER_ENUM.cow)) {
				genderOk = true
			}
			if (this.statusFilter(animal, [status.dry])) {
				statusOk = true
			}
			if (this.ageFilter(animal, defaultCowAge)) {
				ageOk = true
			}
			if (genderOk && statusOk && ageOk) {
				result.push(animal)
			}
		})
		return result
	}

	outputFilter () {
		return this.animals
	}

	filter () {
		switch (this.eventType) {
			case EVENT_TYPES_ENUM.abort:
				return this.abortFilter()
			case EVENT_TYPES_ENUM.neosem:
				return this.neosemFilter()
			case EVENT_TYPES_ENUM.osemenenie:
				return this.osemenenieFilter()
			case EVENT_TYPES_ENUM.otel:
				return this.otelFilter()
			case EVENT_TYPES_ENUM.recheck:
				return this.recheckFilter()
			case EVENT_TYPES_ENUM.suhostoi:
				return this.suhostoiFilter()
			case EVENT_TYPES_ENUM.pozSuhostoi:
				return this.pozSuhostoiFilter()
			case EVENT_TYPES_ENUM.perevod:
				return this.animals
			case EVENT_TYPES_ENUM.output:
				return this.outputFilter()	
			default:
				throw new Error(`AnimalForEventFilter.filter.${this.eventType} not implemented`)
		}
	}
}

