import Duration from './Duration.js'
import addDurationToDate from './addDurationToDate.js'
import parseDateTime from './parseDateTime.js'
import parseDate from './parseDate.js'
import parseTime from './parseTime.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'


export default class Hour {
	constructor (timeString) {
		if (!timeString) {
			let startDate = new Date()

			this._type = 'moment'
			this._timeString = startDate.toISOString()
			this._lowerLimit = startDate,
			this._upperLimit = addDurationToDate(
				startDate,
				new Duration('P0.001S')
			),
			this._precision = 'ms'
		}
		else {
			let intervalSeparator = (timeString.includes('--') ? '--' : '/')
			let items

			this._timeString = timeString

			if (timeString.startsWith('P')) {
				this._type = 'duration'
				this._duration = new Duration(timeString)
				Object.assign(
					this,
					this._duration.toObject()
				)
			}

			else if (timeString.startsWith('R')) {
				this._type = 'repetition'
				items = splitString(timeString, intervalSeparator)
				this.numberOfRepetitions = items[0].substr(1)
				this.timeInterval = items[1]
			}

			else if (items = splitString(timeString, intervalSeparator)) {
				this._type = 'period'
				this.start = parseDateTime(items[0])
				this.end = parseDateTime(items[1])
			}

			else {
				this._type = 'moment'
				Object.assign(
					this,
					parseDateTime(timeString)
				)
			}
		}
	}

	clone () {
		return new Hour(this.toString())
	}

	set hours (hours) {
		if (this._type !== 'moment' && this._type !== 'duration') {
			throw new Error('Hours can only be set for moments and durations')
		}
		hours = Number(hours)

		this._hours = hours
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

	get hours () {
		return this._hours
	}

	getHours () {
		return this._hours
	}

	toObject () {
		let returnObject

		if (this._type === 'moment') {
			returnObject = {
				type: this.type,
				string: this.timeString,
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
				string: this.timeString,
			}

			Object.assign(returnObject, this._duration)
		}
		else if (this._type === 'period') {
			returnObject = {
				type: this.type,
				string: this.timeString,
				start: {
					precision: this.start.precision
				},
				end: {
					precision: this.end.precision
				}
			}

			if (this.start.lowerLimit)
				returnObject.start.lowerLimit = this.start.lowerLimit

			if (this.start.upperLimit)
				returnObject.start.upperLimit = this.start.upperLimit

			if (this.end.lowerLimit)
				returnObject.end.lowerLimit = this.end.lowerLimit

			if (this.end.upperLimit)
				returnObject.end.upperLimit = this.end.upperLimit
		}

		return returnObject
	}

	toJSON () {
		return this.toObject()
	}

	get timeString () {
		if (!this._timeString) {
			if (this.type === 'duration') {
				return this._duration.string
			}
			throw new Error('Time string is not available')
		}

		return this._timeString
	}

	toString () { return this.timeString }

	get precision () { return this._precision }
	set precision (precision) { this._precision = precision }

	get type () { return this._type }

	get lowerLimit () { return this._lowerLimit }
	set lowerLimit (lowerLimit) { this._lowerLimit = lowerLimit }

	get upperLimit () { return this._lowerLimit }
	set upperLimit (upperLimit) { this._upperLimit = upperLimit }
}
