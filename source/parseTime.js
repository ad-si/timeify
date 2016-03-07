export default (timeString) => {
	timeString = timeString.replace(/\:/g, '')

	let [time, fraction = 0] = timeString.split('.')
	let returnObject = {
		_hours: 0,
		_minutes: 0,
		_seconds: 0,
		_milliseconds: 0
	}
	fraction = Number('0.' + fraction)

	if (time.length >= 2) {
		returnObject._hours = Number(time.slice(0, 2)) || 0
		returnObject._minutes = fraction * 60
	}
	if (time.length >= 4) {
		returnObject._minutes = Number(time.slice(2, 4)) || 0
		returnObject._seconds = fraction * 60
	}
	if (time.length === 6) {
		returnObject._seconds = Number(time.slice(4, 6)) || 0
		returnObject._milliseconds = fraction
	}

	returnObject._timeString =
		('00' + returnObject._hours).slice(-2) + ':' +
		('00' + returnObject._minutes).slice(-2) + ':' +
		('00' + returnObject._seconds).slice(-2) + '.' +
		('000' + returnObject._milliseconds).slice(-3)

	returnObject.precision = returnObject._milliseconds ?
		'millisecond' :
		(returnObject._seconds ?
			'second' :
			(returnObject._minutes ? 'minute' : 'hour')
		)

	return returnObject
}
