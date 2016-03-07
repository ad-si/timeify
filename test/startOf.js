import runTest from 'ava'
import expect from 'unexpected'

import Hour from '../build/index'

const unitToIsoString = {
	// TODO: Implement
	// millenium: '2000-00-00T00:00:00.000Z',
	// century: '2100-00-00T00:00:00.000Z',
	// decade: '2110-00-00T00:00:00.000Z',
	year: '2115-01-01T00:00:00.000Z',
	month: '2115-11-01T00:00:00.000Z',
	week: '2115-11-18T00:00:00.000Z',
	day: '2115-11-24T00:00:00.000Z',
	hour: '2115-11-24T18:00:00.000Z',
	minute: '2115-11-24T18:37:00.000Z',
	second: '2115-11-24T18:37:22.000Z',
}


for (let unit in unitToIsoString) {
	runTest('start of ' + unit, test => {
		const moment = new Hour('2115-11-24T18:37:22.345')
		const functionName = 'startOf' +
			unit.slice(0,1).toUpperCase() +
			unit.slice(1)

		if (moment[functionName]) {
			moment[functionName]()
			expect(moment.isoString, 'to equal', unitToIsoString[unit])
		}
	})
}
