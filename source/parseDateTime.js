import addDurationToDate from './addDurationToDate.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'

export default function (dateTimeString) {

	let items
	let returnObject = {
		string: dateTimeString
	}

	if (items = splitString(dateTimeString, 'T')) {
		Object.assign(returnObject, parseDate(items[0]))
		Object.assign(returnObject, parseTime(items[1]))
		return returnObject
	}

	returnObject.lowerLimit = new Date(dateTimeString)

	if (items = splitString(dateTimeString, '-')) {
		let precision = (items.length === 3) ? 'day' : 'month'

		Object.assign(returnObject, {
			upperLimit: addDurationToDate(
				returnObject.lowerLimit,
				precisionToDuration(precision)
			),
			precision
		})
	}
	else if (dateTimeString.length === 4) {
		Object.assign(returnObject, {
			year: dateTimeString,
			upperLimit: addDurationToDate(
				returnObject.lowerLimit,
				precisionToDuration('year')
			),
			precision: 'year'
		})
	}
	else if (dateTimeString.length === 3) {
		returnObject.lowerLimit = new Date(
			String(Number(dateTimeString) * 10)
		)

		Object.assign(returnObject, {
			decade: dateTimeString,
			upperLimit: addDurationToDate(
				returnObject.lowerLimit,
				precisionToDuration('decade')
			),
			precision: 'decade'
		})
	}
	else if (dateTimeString.length === 2) {
		returnObject.lowerLimit = new Date(
			String(Number(dateTimeString) * 100)
		)

		Object.assign(returnObject, {
			century: dateTimeString,
			upperLimit: addDurationToDate(
				returnObject.lowerLimit,
				precisionToDuration('century')
			),
			precision: 'century'
		})
	}
	else if (dateTimeString.length === 1) {
		returnObject.lowerLimit = new Date(
			String(Number(dateTimeString) * 1000)
		)

		Object.assign(returnObject, {
			millennium: dateTimeString,
			upperLimit: addDurationToDate(
				returnObject.lowerLimit,
				precisionToDuration('millennium')
			),
			precision: 'millennium'
		})
	}

	return returnObject
}
