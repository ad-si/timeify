import zpad from 'zpad'

export default class Date {
	constructor () {
		let items = dateString.split('-')

		this._dateString = dateString
		this._years = Number(items[0])
		this._months = Number(items[1])
		this._days = Number(items[2])
	}

	get string () {
		if (!this._dateString) {
			this._dateString =
				zpad(this._years, 4) + '-' +
				zpad(this._months, 2) + '-' +
				zpad(this._days, 2)
		}

		return this._dateString
	}

	toString () {
		return this.string
	}
}
