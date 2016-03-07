import zpad from 'zpad'

export default (object) => {
	return zpad(object._hours, 2) + ':' +
		zpad(object._minutes, 2) + ':' +
		zpad(object._seconds, 2) + '.' +
		zpad(object._milliseconds, 3)
}
