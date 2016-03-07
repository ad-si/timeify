import addDurationToDate from './addDurationToDate.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'
import parseDate from './parseDate.js'
import parseTime from './parseTime.js'


export default (dateTimeString) => {

	dateTimeString = dateTimeString.replace(' ', 'T')
	let returnObject = {
		_isoString: dateTimeString
	}
	let items

	if (items = splitString(dateTimeString, 'T')) {
		let date = parseDate(items[0])
		let time = parseTime(items[1].replace('Z', ''))

		Object.assign(returnObject, date)
		Object.assign(returnObject, time)

		returnObject._lowerLimit = new Date(
			returnObject._dateString + 'T' + returnObject._timeString + 'Z'
		)
		returnObject._upperLimit = addDurationToDate(
			returnObject._lowerLimit,
			precisionToDuration(returnObject.precision)
		)
		returnObject._precision = time.precision

		return returnObject
	}

	returnObject._lowerLimit = new Date(dateTimeString)

	if (items = splitString(dateTimeString, '-')) {
		let precision = (items.length === 3) ? 'day' : 'month'

		Object.assign(returnObject, {
			_upperLimit: addDurationToDate(
				returnObject._lowerLimit,
				precisionToDuration(precision)
			),
			_precision: precision
		})
	}
	else if (dateTimeString.length === 4) {
		Object.assign(returnObject, {
			_year: dateTimeString,
			_upperLimit: addDurationToDate(
				returnObject._lowerLimit,
				precisionToDuration('year')
			),
			_precision: 'year'
		})
	}
	else if (dateTimeString.length === 3) {
		returnObject._lowerLimit = new Date(
			String(Number(dateTimeString) * 10)
		)

		Object.assign(returnObject, {
			_decade: dateTimeString,
			_upperLimit: addDurationToDate(
				returnObject._lowerLimit,
				precisionToDuration('decade')
			),
			_precision: 'decade'
		})
	}
	else if (dateTimeString.length === 2) {
		returnObject._lowerLimit = new Date(
			String(Number(dateTimeString) * 100)
		)

		Object.assign(returnObject, {
			_century: dateTimeString,
			_upperLimit: addDurationToDate(
				returnObject._lowerLimit,
				precisionToDuration('century')
			),
			_precision: 'century'
		})
	}
	else if (dateTimeString.length === 1) {
		returnObject._lowerLimit = new Date(
			String(Number(dateTimeString) * 1000)
		)

		Object.assign(returnObject, {
			_millennium: dateTimeString,
			_upperLimit: addDurationToDate(
				returnObject._lowerLimit,
				precisionToDuration('millennium')
			),
			_precision: 'millennium'
		})
	}

	return returnObject
}
