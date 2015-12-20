import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'

runTest('P3Y6M4DT12H30M5S', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			years: 3,
			months: 6,
			days: 4,
			hours: 12,
			minutes: 30,
			seconds: 5,
		}
	)
})
