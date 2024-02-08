import { filter } from '../../src/event';
import { ANIMAL_GENDER_ENUM, COW_STATUS, EVENT_TYPES_ENUM } from '../../src/enums';
import { IAnimal } from '../../src/types';

function getYoungDob() {
	var d = new Date();
	d.setMonth(d.getMonth() - 9);
	return d
}
const animals: IAnimal[] = [
	{
		id: '1',
		orgId: '123',
		name: 'Федька',
		animalId: '234234234',
		isoId: '234234234',
		regId: '234234234',
		activometrId: '234234234',
		status: COW_STATUS.BRED,
		gender: ANIMAL_GENDER_ENUM.bull,
		dob: new Date('2022-12-12')
	},
	{
		id: '2',
		orgId: '123',
		name: 'Машка',
		animalId: '123123123',
		isoId: '123123123',
		regId: '123123123',
		activometrId: '123123123',
		status: COW_STATUS.BRED,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
	{
		id: '3',
		orgId: '123',
		name: 'Дуся',
		animalId: '345345345',
		isoId: '345345345',
		regId: '345345345',
		activometrId: '345345345',
		status: COW_STATUS.HEIFER,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
	{
		id: '4',
		orgId: '123',
		name: 'Боба',
		animalId: '456456456',
		isoId: '456456456',
		regId: '456456456',
		activometrId: '456456456',
		status: COW_STATUS.OPEN,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
	{
		id: '5',
		orgId: '123',
		name: 'Киса',
		animalId: '567567567',
		isoId: '567567567',
		regId: '567567567',
		activometrId: '567567567',
		status: COW_STATUS.FRESH,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
	{
		id: '6',
		orgId: '123',
		name: 'Молодка',
		animalId: '678678678',
		isoId: '678678678',
		regId: '678678678',
		activometrId: '678678678',
		status: COW_STATUS.FRESH,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: getYoungDob()
	},
	{
		id: '7',
		orgId: '123',
		name: 'Сушка',
		animalId: '567567567',
		isoId: '567567567',
		regId: '567567567',
		activometrId: '567567567',
		status: COW_STATUS.DRY,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
	{
		id: '8',
		orgId: '123',
		name: 'Сушка',
		animalId: '567567567',
		isoId: '567567567',
		regId: '567567567',
		activometrId: '567567567',
		status: COW_STATUS.PREGNANT,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
	{
		id: '9',
		orgId: '123',
		name: 'СОтношка',
		animalId: '567567567',
		isoId: '567567567',
		regId: '567567567',
		activometrId: '567567567',
		animalEventRelation: [
			{
				eventDetail: {
					type: EVENT_TYPES_ENUM.recheck
				}
			}
		],
		status: COW_STATUS.PREGNANT,
		gender: ANIMAL_GENDER_ENUM.cow,
		dob: new Date('2022-12-12')
	},
]

describe('AnimalForEventFilter', () => {
	function testtObject (eventType: EVENT_TYPES_ENUM, expectedAnimalsCount: number) {
		const result = filter(animals, eventType)
		expect(result.length).toBe(expectedAnimalsCount);
	}
	it(`event type: ${EVENT_TYPES_ENUM.abort}`, () => {
		testtObject(EVENT_TYPES_ENUM.abort, 8)
	})

	it(`event type: ${EVENT_TYPES_ENUM.neosem}`, () => {
		testtObject(EVENT_TYPES_ENUM.neosem, 8)
	})

	it(`event type: ${EVENT_TYPES_ENUM.osemenenie}`, () => {
		testtObject(EVENT_TYPES_ENUM.osemenenie, 4)
	})

	it(`event type: ${EVENT_TYPES_ENUM.otel}`, () => {
		testtObject(EVENT_TYPES_ENUM.otel, 3)
	})

	it(`event type: ${EVENT_TYPES_ENUM.recheck}`, () => {
		testtObject(EVENT_TYPES_ENUM.recheck, 4)
	})

	it(`event type: ${EVENT_TYPES_ENUM.suhostoi}`, () => {
		testtObject(EVENT_TYPES_ENUM.suhostoi, 8)
	})

	it(`event type: ${EVENT_TYPES_ENUM.pozSuhostoi}`, () => {
		testtObject(EVENT_TYPES_ENUM.pozSuhostoi, 1)
	})

	it(`event type: ${EVENT_TYPES_ENUM.perevod}`, () => {
		testtObject(EVENT_TYPES_ENUM.perevod, 9)
	})

	it(`event type: ${EVENT_TYPES_ENUM.transferOut}`, () => {
		testtObject(EVENT_TYPES_ENUM.perevod, 9)
	})
})
