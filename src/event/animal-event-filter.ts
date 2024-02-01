import { IAnimal } from '../types';
import { ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM, EVENT_TYPES_ENUM } from '../enums';
import { getMonthFromDate } from '../helpers/date';

const status = ANIMAL_STATUS_ENUM

const defaultCowAge = 12

/*

const filtered = filter(animals, eventType)

*/

function genderFilter (animal: IAnimal, availableGender: ANIMAL_GENDER_ENUM): Boolean {
	return animal.gender === availableGender
}

function ageFilter (animal: IAnimal, availableMinAge: number /*month*/): Boolean {
	const months = getMonthFromDate(animal.dob.toISOString())
	return months > availableMinAge
}

function statusFilter (animal: IAnimal, availableStatuses: ANIMAL_STATUS_ENUM[]): Boolean {
	return availableStatuses.includes(animal.status)
}

function abortFilter (animals: IAnimal[]): IAnimal[] {
	const result: IAnimal[] = animals.filter(animal => genderFilter(animal, ANIMAL_GENDER_ENUM.cow))
	return result
}

function neosemFilter (animals: IAnimal[]): IAnimal[] {
	return abortFilter(animals)
}

function osemenenieFilter(animals: IAnimal[]): IAnimal[] {
	const result: IAnimal[] = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const statusOk = statusFilter(animal, [status.heifer, status.bred, status.open, status.fresh])
		const ageOk = ageFilter(animal, defaultCowAge)

		return genderOk && statusOk && ageOk && animal
	})

	return result
}

function otelFilter (animals: IAnimal[]): IAnimal[] {
	const result: IAnimal[] = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const statusOk = statusFilter(animal, [status.dry, status.pregnant])
		const ageOk = ageFilter(animal, defaultCowAge)

		return genderOk && statusOk && ageOk && animal
	})
	return result
}

function recheckFilter (animals: IAnimal[]): IAnimal[] {
	const result: IAnimal[] = animals.filter(animal => {
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
	console.info('result', result)
	return result
}

function suhostoiFilter (animals: IAnimal[]): IAnimal[] {
	return abortFilter(animals)
}

function pozSuhostoiFilter (animals: IAnimal[]): IAnimal[] {
	const result: IAnimal[] = animals.filter(animal => {
		const genderOk = genderFilter(animal, ANIMAL_GENDER_ENUM.cow)
		const statusOk = statusFilter(animal, [status.dry])
		const ageOk = ageFilter(animal, defaultCowAge)

		return genderOk && statusOk && ageOk && animal
	})
	return result
}

function transferOutFilter (animals: IAnimal[]): IAnimal[] {
	return animals
}

function perevodFilter (animals: IAnimal[]) {
	return animals
}

interface IFilters {
	[key: string]: (animals: IAnimal[]) => IAnimal[]
}

export function filter (animals: IAnimal[], eventType: EVENT_TYPES_ENUM) {
	const filters: IFilters = {
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
