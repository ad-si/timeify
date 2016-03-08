import addDurationToInstant from './addDurationToInstant.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'
import Date from './Date.js'
import TimeOfDay from './TimeOfDay.js'


export default class DateTime {

	constructor (dateTimeString) {
		dateTimeString = dateTimeString.replace(' ', 'T')
		this._isoString = dateTimeString

		let items

		if (items = splitString(dateTimeString, 'T')) {
			this._date = new Date(items[0])
			this._timeOfDay = new TimeOfDay(items[1].replace('Z', ''))
			this._precision = this._timeOfDay.precision

			this._lowerLimit = new Instant(
				this._date.string + 'T' + this._timeOfDay.string + 'Z'
			)
			this._upperLimit = addDurationToInstant(
				this._lowerLimit,
				precisionToDuration(this._precision)
			)
		}
		else {

			this._lowerLimit = new Instant(dateTimeString)

			if (items = splitString(dateTimeString, '-')) {
				let precision = (items.length === 3) ? 'day' : 'month'

				Object.assign(this, {
					_upperLimit: addDurationToInstant(
						this._lowerLimit,
						precisionToDuration(precision)
					),
					_precision: precision
				})
			}
			else if (dateTimeString.length === 4) {
				Object.assign(this, {
					_year: dateTimeString,
					_upperLimit: addDurationToInstant(
						this._lowerLimit,
						precisionToDuration('year')
					),
					_precision: 'year'
				})
			}
			else if (dateTimeString.length === 3) {
				this._lowerLimit = new Instant(
					String(Number(dateTimeString) * 10)
				)

				Object.assign(this, {
					_decade: dateTimeString,
					_upperLimit: addDurationToInstant(
						this._lowerLimit,
						precisionToDuration('decade')
					),
					_precision: 'decade'
				})
			}
			else if (dateTimeString.length === 2) {
				this._lowerLimit = new Instant(
					String(Number(dateTimeString) * 100)
				)

				Object.assign(this, {
					_century: dateTimeString,
					_upperLimit: addDurationToInstant(
						this._lowerLimit,
						precisionToDuration('century')
					),
					_precision: 'century'
				})
			}
			else if (dateTimeString.length === 1) {
				this._lowerLimit = new Instant(
					String(Number(dateTimeString) * 1000)
				)

				Object.assign(this, {
					_millennium: dateTimeString,
					_upperLimit: addDurationToInstant(
						this._lowerLimit,
						precisionToDuration('millennium')
					),
					_precision: 'millennium'
				})
			}
		}
	}

	get string () {
		serializeDate(object) + 'T' + serializeTime(object) + 'Z'
	}
}
