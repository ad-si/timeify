export default function (timeString) {
	let items = timeString.split(':')
	let returnObject = {}
	let precision = 'millisecond'
	let secondComponents

	let hour = items[0] || 0
	let minute = items[1] || 0
	let second = 0
	let millisecond = 0

	if (items.length === 2) {
		this.precision = 'minute'
	}
	if (items.length === 1) {
		this.precision = 'hour'
	}

	if (secondComponents = items[2].split('.')) {
		second = secondComponents[0]
		millisecond = secondComponents[1]
	}
	else {
		second = items[2]
		this.precision = 'second'
	}

	return {
		string: timeString,
		hour,
		minute,
		second,
		millisecond
	}
}
