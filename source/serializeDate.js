import zpad from 'zpad'

export default (object) => {
	return zpad(object._years, 4) + '-' +
		zpad(object._months, 2) + '-' +
		zpad(object._days, 2)
}
