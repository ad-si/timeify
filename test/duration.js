import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'

runTest('P7Y', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			years: 7,
		}
	)
})

runTest('P7M', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			months: 7,
		}
	)
})

runTest('P7W', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			weeks: 7,
		}
	)
})

runTest('P7D', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			days: 7,
		}
	)
})

runTest('P7H', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			hours: 7,
		}
	)
})

runTest('PT7M', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			minutes: 7,
		}
	)
})

runTest('P7S', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			seconds: 7,
		}
	)
})

runTest('P7.345S', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: 'P7S345M',
			seconds: 7,
			milliseconds: 345,
		}
	)
})

runTest('P7Y5M', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'duration',
			string: test.title,
			years: 7,
			months: 5
		}
	)
})

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
