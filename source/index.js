import Duration from './Duration'
import addDurationToDate from './addDurationToDate'
import parseDateTime from './parseDateTime'
import serializeDateTime from './serializeDateTime'
import parseDate from './parseDate'
import parseTime from './parseTime'
import splitString from './splitString'
import precisionToDuration from './precisionToDuration'
import * as startOf from './startOf'

function checkIfMomentOrDuration (type, quantity) {
	if (type !== 'moment' && type !== 'duration') {
		throw new Error(quantity + ' can only be set for moments and durations')
	}
}

export default class Hour {
	constructor (isoString) {
		if (!isoString) {
			let startDate = new Date()

			this._type = 'moment'
			this._isoString = startDate.toISOString()
			this._lowerLimit = startDate,
			this._upperLimit = addDurationToDate(
				startDate,
				new Duration('P0.001S')
			),
			this._precision = 'millisecond'
		}
		else {
			let intervalSeparator = isoString.includes('--') ? '--' : '/'
			let items

			this._isoString = isoString

			if (isoString.startsWith('P')) {
				this._type = 'duration'
				this._duration = new Duration(isoString)
				Object.assign(
					this,
					this._duration.toObject()
				)
			}

			else if (isoString.startsWith('R')) {
				this._type = 'recurring interval'
				items = splitString(isoString, intervalSeparator)
				this.numberOfRepetitions = items[0].substr(1)
				this.timeInterval = items[1]
			}

			else if (items = splitString(isoString, intervalSeparator)) {
				this._type = 'interval'
				this.start = parseDateTime(items[0])
				this.end = parseDateTime(items[1])
			}

			else {
				this._type = 'moment'
				Object.assign(
					this,
					parseDateTime(isoString)
				)
			}
		}
	}

	clone () {
		return new Hour(this.isoString)
	}


	// Years
	set years (years) {
		checkIfMomentOrDuration(this.type, 'Years')
		this._years = years
		this._isoString = null
		this._dateString = null
		return this
	}
	setYears (years) {
		this.years = years
		return this
	}

	get years () { return this._years }
	getYears () { return this._years }


	// Months
	set months (months) {
		checkIfMomentOrDuration(this.type, 'Months')
		this._months = months
		this._isoString = null
		this._dateString = null
		return this
	}
	setMonths (months) {
		this.months = months
		return this
	}

	get months () { return this._months }
	getMonths () { return this._months }


	// Days
	set days (days) {
		checkIfMomentOrDuration(this.type, 'Days')
		this._days = days
		this._isoString = null
		this._dateString = null
		return this
	}
	setDays (days) {
		this.days = days
		return this
	}

	get days () { return this._days }
	getDays () { return this._days }


	// Hours
	set hours (hours) {
		checkIfMomentOrDuration(this.type, 'Hours')
		hours = Number(hours)

		this._hours = hours
		this._isoString = null
		this._timeString = null

		if (this._type === 'moment') {
			this._lowerLimit.setHours(hours)
			this._upperLimit.setHours(hours)
		}
	}

	setHours (hours) {
		this.hours = hours
		return this
	}

	get hours () { return this._hours }
	getHours () { return this._hours }


	// Minutes
	set minutes (minutes) {
		checkIfMomentOrDuration(this.type, 'Minutes')
		this._minutes = minutes
		this._isoString = null
		this._timeString = null
		return this
	}
	setMinutes (minutes) {
		this.minutes = minutes
		return this
	}

	get minutes () { return this._minutes }
	getMinutes () { return this._minutes }


	// Seconds
	set seconds (seconds) {
		checkIfMomentOrDuration(this.type, 'Seconds')
		this._seconds = seconds
		this._isoString = null
		this._timeString = null
		return this
	}
	setSeconds (seconds) {
		this.seconds = seconds
		return this
	}

	get seconds () { return this._seconds }
	getSeconds () { return this._seconds }


	// Milliseconds
	set milliseconds (milliseconds) {
		checkIfMomentOrDuration(this.type, 'Milliseconds')
		this._milliseconds = milliseconds
		this._isoString = null
		this._timeString = null
		return this
	}
	setMilliseconds (milliseconds) {
		this.milliseconds = milliseconds
		return this
	}

	get milliseconds () { return this._milliseconds }
	getMilliseconds () { return this._milliseconds }

	// Type
	set type (type) { this._type = type; return this }
	setType (type) { this._type = type; return this }
	get type () { return this._type }
	getType () { return this._type }

	get precision () { return this._precision }
	set precision (precision) { this._precision = precision }

	get lowerLimit () { return this._lowerLimit }
	set lowerLimit (lowerLimit) { this._lowerLimit = lowerLimit }

	get upperLimit () { return this._lowerLimit }
	set upperLimit (upperLimit) { this._upperLimit = upperLimit }


	startOfYear ()		{ startOf.year(this); return this }
	startOfMonth ()		{ startOf.month(this); return this }
	startOfDay ()		{ startOf.day(this); return this }
	startOfHour ()		{ startOf.hour(this); return this }
	startOfMinute ()	{ startOf.minute(this); return this }
	startOfSecond ()	{ startOf.second(this); return this }


	get isoString () {
		if (!this._isoString) {
			if (this.type === 'duration') {
				return this._duration.string
			}
			else if (this.type === 'moment') {
				return serializeDateTime(this)
			}
			throw new Error('ISO time string is not available')
		}

		return this._isoString
	}

	toString () { return this.isoString }


	toObject () {
		let returnObject

		if (this._type === 'moment') {
			returnObject = {
				type: this.type,
				string: this.isoString,
				precision: this.precision,
			}

			if (this._lowerLimit)
				returnObject.lowerLimit = this._lowerLimit

			if (this._upperLimit)
				returnObject.upperLimit = this._upperLimit
		}
		else if (this._type === 'duration') {
			returnObject = {
				type: this.type,
				string: this.isoString,
			}

			Object.assign(returnObject, this._duration)
		}
		else if (this._type === 'interval') {
			returnObject = {
				type: this.type,
				string: this.isoString,
				start: {
					precision: this.start._precision
				},
				end: {
					precision: this.end._precision
				}
			}

			if (this.start._lowerLimit)
				returnObject.start.lowerLimit = this.start._lowerLimit

			if (this.start._upperLimit)
				returnObject.start.upperLimit = this.start._upperLimit

			if (this.end._lowerLimit)
				returnObject.end.lowerLimit = this.end._lowerLimit

			if (this.end._upperLimit)
				returnObject.end.upperLimit = this.end._upperLimit
		}

		return returnObject
	}

	toJSON () {
		return this.toObject()
	}
}
