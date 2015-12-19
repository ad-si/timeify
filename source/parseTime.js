export default function (timeString) {
	timeString = timeString.replace(/\:/g, '')

	let [time, fraction = 0] = timeString.split('.')
	let returnObject = {
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}
	fraction = Number('0.' + fraction)

	if (time.length >= 2) {
		returnObject.hour = time.slice(0, 2) || 0
		returnObject.minute = fraction * 60
	}
	if (time.length >= 4) {
		returnObject.minute = time.slice(2, 4) || 0
		returnObject.second = fraction * 60
	}
	if (time.length === 6) {
		returnObject.second = time.slice(4, 6) || 0
		returnObject.millisecond = fraction
	}

	returnObject.string =
		('00' + returnObject.hour).slice(-2) + ':' +
		('00' + returnObject.minute).slice(-2) + ':' +
		('00' + returnObject.second).slice(-2) + '.' +
		('000' + returnObject.millisecond).slice(-3)

	returnObject.precision = returnObject.millisecond ? 'millisecond' :
		(returnObject.second ? 'second' :
			(returnObject.minute ? 'minute' : 'hour')
		)

	return returnObject
}
