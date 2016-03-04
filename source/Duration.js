let durationFragments = [
	'years',
	'months',
	'weeks',
	'days',
	'hours',
	'minutes',
	'seconds',
	'milliseconds'
]

export default class Duration {
	constructor (durationString) {
		let durationPattern =
			'P' +
			'(?:(\\d+)Y)?' + // Years
			'(?:(\\d+)M)?' + // Months
			'(?:(\\d+)W)?' + // Weeks
			'(?:(\\d+)D)?' + // Days
			'T?' +
			'(?:(\\d+)H)?' + // Hours
			'(?:(\\d+)M)?' + // Minutes
			'(?:(\\d+)?' +   // Seconds
			'\\.?(\\d+)?S)?' // Milliseconds

		let regex = new RegExp(durationPattern, 'i')
		let durationArray = durationString.match(regex)

		durationFragments.forEach((fragment, index) => {
			let value = Number(durationArray[index + 1])
			if (value)
				this[fragment] = value
		})
	}

	toObject () {
		return durationFragments.reduce(
			(object, fragment) => {
				if (this[fragment] != null)
					object[fragment] = this[fragment]
				return object
			},
			{}
		)
	}

	toJSON () {
		return this.toObject()
	}

	get string () {
		return durationFragments
			.reduce(
				(string, fragment) => {
					if (this[fragment] == null) {
						return string
					}

					if (fragment === 'minutes' && !string.includes('t')) {
						string += 't'
					}

					string += this[fragment] + fragment.substr(0,1)

					if (fragment === 'days') {
						string += 't'
					}
					if (fragment === 'milliseconds') {
						string.replace('s', '.' + this[fragment] + 's')
					}

					return string
				},
				'P'
			)
			.toUpperCase()
	}

	toString () {
		return this.string
	}
}
