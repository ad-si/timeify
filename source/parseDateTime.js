import addDurationToDate from './addDurationToDate.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'
import parseDate from './parseDate.js'
import parseTime from './parseTime.js'


export default function (dateTimeString) {

	dateTimeString = dateTimeString.replace(' ', 'T')
	let returnObject = {
		string: dateTimeString
	}
	let items


	if (items = splitString(dateTimeString, 'T')) {
		let date = parseDate(items[0])
		let time = parseTime(items[1].replace('Z', ''))

		Object.assign(returnObject, date)
		Object.assign(returnObject, time)


		returnObject.lowerLimit = new Date(
			date.string + 'T' + time.string + 'Z'
		)
		returnObject.upperLimit = addDurationToDate(
			returnObject.lowerLimit,
			precisionToDuration(returnObject.precision)
		)

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
