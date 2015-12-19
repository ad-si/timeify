import addDurationToDate from './addDurationToDate.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'

export default function (dateTimeString) {

	let items

	if (items = splitString(dateTimeString, 'T')) {
		let date = parseDate(items[0])
		let time = parseTime(items[1])
		Object.assign(date, time)
		date.string = dateTimeString
		return date
	}

	if (items = splitString(dateTimeString, '-')) {
		let date = new Date(dateTimeString)

		return {
			string: dateTimeString,
			lowerLimit: date,
			upperLimit: addDurationToDate(date, precisionToDuration('day')),
			precision: 'day'
		}
	}

	let date = new Date(dateTimeString)

	return {
		year: dateTimeString,
		lowerLimit: date,
		upperLimit: addDurationToDate(date, precisionToDuration('year')),
		precision: 'year'
	}
}
