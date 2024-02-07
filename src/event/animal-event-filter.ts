import { IAbstractAnimal, IAnimal } from '../types';
import { ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM, EVENT_TYPES_ENUM } from '../enums';
import { getMonthFromDate } from '../helpers/date';

const status = ANIMAL_STATUS_ENUM

const defaultCowAge = 12

/*

const filtered = filter(animals, eventType)

*/

function ageFilter<T extends IAbstractAnimal> (animal: T, availableMinAge: number /*month*/): Boolean {
	const months = getMonthFromDate(animal.dob.toISOString())
	return months > availableMinAge
}

function statusFilter<T extends IAbstractAnimal> (animal: T, availableStatuses: ANIMAL_STATUS_ENUM[]): Boolean {
	return availableStatuses.includes(animal.status)
}

function genderFilter<T extends IAbstractAnimal> (animal: T, availableGender: ANIMAL_GENDER_ENUM): Boolean {
	return animal.gender === availableGender
}

function abortFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	const result: T[] = animals.filter(animal => genderFilter<T>(animal, ANIMAL_GENDER_ENUM.cow))
	return result
}

function neosemFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	return abortFilter(animals)
}

function osemenenieFilter<T extends IAbstractAnimal>(animals: T[]): T[] {
	const result = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const statusOk = statusFilter(animal, [status.heifer, status.bred, status.open, status.fresh])
		const ageOk = ageFilter(animal, defaultCowAge)

		return genderOk && statusOk && ageOk && animal
	})

	return result
}

function otelFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	const result = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const statusOk = statusFilter(animal, [status.dry, status.pregnant])
		const ageOk = ageFilter(animal, defaultCowAge)

		return genderOk && statusOk && ageOk && animal
	})
	return result
}

function recheckFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	const result = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const ageOk = ageFilter(animal, defaultCowAge)
		
		let availableStatus = [status.bred, status.pregnant, status.dry]
		if (animal.animalEventRelation) {
	  		const previousRechecks = animal.animalEventRelation.filter((row) => {
				return row.eventDetail.type === EVENT_TYPES_ENUM.recheck
			})
			if (previousRechecks.length == 0) {
				availableStatus = [status.bred]
			}
		}
		const statusOk = statusFilter(animal, availableStatus)
		
		return genderOk && statusOk && ageOk && animal
	})
	return result
}

function suhostoiFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	return abortFilter(animals)
}

function pozSuhostoiFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	const result = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const statusOk = statusFilter(animal, [status.dry])
		const ageOk = ageFilter(animal, defaultCowAge)

		return genderOk && statusOk && ageOk && animal
	})
	return result
}

function transferOutFilter<T extends IAbstractAnimal> (animals: T[]): T[] {
	return animals
}

function perevodFilter<T extends IAbstractAnimal> (animals: T[]) {
	return animals
}

interface IFilters<T extends IAbstractAnimal> {
	[key: string]: (animals: T[]) => T[]
}

export function filter<T extends IAbstractAnimal>(animals: T[], eventType: EVENT_TYPES_ENUM) {
	const filters: IFilters<T> = {
		[EVENT_TYPES_ENUM.abort]: abortFilter,
		[EVENT_TYPES_ENUM.neosem]: neosemFilter,
		[EVENT_TYPES_ENUM.osemenenie]: osemenenieFilter,
		[EVENT_TYPES_ENUM.otel]: otelFilter,
		[EVENT_TYPES_ENUM.recheck]: recheckFilter,
		[EVENT_TYPES_ENUM.suhostoi]: suhostoiFilter,
		[EVENT_TYPES_ENUM.pozSuhostoi]: pozSuhostoiFilter,
		[EVENT_TYPES_ENUM.perevod]: perevodFilter,
		[EVENT_TYPES_ENUM.transferOut]: transferOutFilter
	}
	try {
		const result = filters[eventType](animals)
		return result
	} catch (err) {
		throw new Error(`AnimalForEventFilter.filter.${eventType} not implemented`)
	}	
}
