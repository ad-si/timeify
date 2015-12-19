import Duration from './Duration.js'

export default function (precision) {
	let map = {
		year: new Duration('P1Y'),
		month: new Duration('P1M'),
		week: new Duration('P1W'),
		day: new Duration('P1D'),
		hour: new Duration('P1H'),
		minute: new Duration('PT1M'),
		second: new Duration('P1S'),
		millisecond: new Duration('P0.001S')
	}

	if (!map.hasOwnProperty(precision))
		throw new Error(precision + ' is no valid precision String')

	return map[precision]
}
