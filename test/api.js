import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'

let hour = new Hour('2015-11-24')

runTest('toJSON', test => {
	expect(
		JSON.stringify(hour),
		'to equal',
		'{' +
			'"type":"moment",' +
			'"string":"2015-11-24",' +
			'"precision":"day",' +
			'"lowerLimit":"2015-11-24T00:00:00.000Z",' +
			'"upperLimit":"2015-11-25T00:00:00.000Z"' +
		'}'
	)
})

runTest('toString', test => {
	expect(hour.toString(), 'to equal', '2015-11-24')
})
