import zpad from 'zpad'

export default class Time {
	constructor (timeString) {
		timeString = timeString.replace(/\:/g, '')

		let [time, fraction = 0] = timeString.split('.')

		this._hours = 0
		this._minutes = 0
		this._seconds = 0
		this._milliseconds = 0

		fraction = Number('0.' + fraction)

		if (time.length >= 2) {
			this._hours = Number(time.slice(0, 2)) || 0
			this._minutes = fraction * 60
		}
		if (time.length >= 4) {
			this._minutes = Number(time.slice(2, 4)) || 0
			this._seconds = fraction * 60
		}
		if (time.length === 6) {
			this._seconds = Number(time.slice(4, 6)) || 0
			this._milliseconds = fraction
		}

		// Create internal timeString
		this.getString()

		this.precision = this._milliseconds ?
			'millisecond' :
			(this._seconds ?
				'second' :
				(this._minutes ? 'minute' : 'hour')
			)
	}

	get string () {
		if (!this._timeString) {
			this._timeString =
				zpad(this._hours, 2) + ':' +
				zpad(this._minutes, 2) + ':' +
				zpad(this._seconds, 2) + '.' +
				zpad(this._milliseconds, 3)
		}
		return this._timeString
	}

	getString () {
		return this.string
	}
}
