export default class Hour {
	constructor (timeString) {
		if (!timeString) {
			this.startDate = new Date()
			this.endDate = new Date(this.startDate)
			this.endDate.setUTCMilliseconds(
				this.startDate.getUTCMilliseconds + 1
			)

			this.precision = 'millisecond'
		}
		else {
			this.startDate = new Date(timeString)
			this.endDate = new Date(this.startDate)
			this.endDate.setUTCMilliseconds(
				this.startDate.getUTCMilliseconds + 1
			)
		}
	}

	toObject () {
		return this
	}

	toString () {
		return this.startDate.toISOString()
	}
}
