import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'


runTest('set & get hours', test => {
	const moment = new Hour('2015-11-24T18:00')
	moment.setHours(12)
	expect(moment.hours, 'to equal', 12)
	moment.hours = 17
	expect(moment.hours, 'to equal', 17)
})

runTest('set & get minutes', test => {
	const moment = new Hour('2015-11-24T18:00')
	moment.setMinutes(45)
	expect(moment.minutes, 'to equal', 45)
	moment.minutes = 50
	expect(moment.minutes, 'to equal', 50)
})

runTest('set & get seconds', test => {
	const moment = new Hour('2015-11-24T18:00')
	moment.setSeconds(45)
	expect(moment.seconds, 'to equal', 45)
	moment.seconds = 50
	expect(moment.seconds, 'to equal', 50)
})

runTest('set & get milliseconds', test => {
	const moment = new Hour('2015-11-24T18:00')
	moment.setMilliseconds(700)
	expect(moment.milliseconds, 'to equal', 700)
	moment.milliseconds = 800
	expect(moment.milliseconds, 'to equal', 800)
})

runTest('clone', test => {
	const moment = new Hour('2015-11-24T12:00')
	const clone = moment.clone()
	clone.setHours(18)

	expect(moment.hours, 'to equal', 12)
	expect(clone.hours, 'to equal', 18)
})

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
