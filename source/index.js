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

			this.type = 'moment'
			this.timeString = startDate.toISOString()
			this.lowerLimit = startDate,
			this.upperLimit = addDurationToDate(
				startDate,
				new Duration('P0.001S')
			),
			this.precision = 'ms'
		}
		else {
			let intervalSeparator = (timeString.includes('--') ? '--' : '/')
			let items

			this.timeString = timeString

			if (timeString.startsWith('P')) {
				this.type = 'duration'
				this._duration = new Duration(timeString).toObject()
				Object.assign(
					this,
					this._duration
				)
			}

			else if (timeString.startsWith('R')) {
				this.type = 'repetition'
				items = splitString(timeString, intervalSeparator)
				this.numberOfRepetitions = items[0].substr(1)
				this.timeInterval = items[1]
			}

			else if (items = splitString(timeString, intervalSeparator)) {
				this.type = 'period'
				this.start = parseDateTime(items[0])
				this.end = parseDateTime(items[1])
			}

			else {
				this.type = 'moment'
				Object.assign(
					this,
					parseDateTime(timeString)
				)
			}
		}
	}

	toObject () {
		let returnObject

		if (this.type === 'moment') {
			returnObject = {
				type: this.type,
				string: this.timeString,
				precision: this.precision,
			}

			if (this.lowerLimit)
				returnObject.lowerLimit = this.lowerLimit

			if (this.upperLimit)
				returnObject.upperLimit = this.upperLimit
		}
		else if (this.type === 'duration') {
			returnObject = {
				type: this.type,
				string: this.timeString,
			}

			Object.assign(returnObject, this._duration)
		}
		else if (this.type === 'period') {
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
		return JSON.stringify(this.toObject())
	}

	toString () {
		return this.timeString
	}
}
