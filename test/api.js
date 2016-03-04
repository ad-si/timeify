import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'

runTest('set & get hours', test => {
	const moment = new Hour('2015-11-24T18:00')
	moment.setHours(12)
	expect(moment.hours, 'to equal', 12)
})

// runTest('toString', test => {
// 	const moment = new Hour('2015-11-24T18:00')
// 	const clone = hour.clone()
// 	moment.setHours(12)
//
// 	console.log(moment)
// 	console.log(clone)
//
// 	expect(clone.hours, 'to equal', 18)
// })

runTest('toJSON', test => {
	const hour = new Hour('2015-11-24')
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
	const hour = new Hour('2015-11-24')
	expect(hour.toString(), 'to equal', '2015-11-24')
})
