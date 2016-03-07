import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'

runTest('2', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2000-01-01T00:00:00.000Z'),
			upperLimit: new Date('3000-01-01T00:00:00.000Z'),
			precision: 'millennium'
		}
	)
})

runTest('20', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2000-01-01T00:00:00.000Z'),
			upperLimit: new Date('2100-01-01T00:00:00.000Z'),
			precision: 'century'
		}
	)
})

runTest('200', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2000-01-01T00:00:00.000Z'),
			upperLimit: new Date('2010-01-01T00:00:00.000Z'),
			precision: 'decade'
		}
	)
})

runTest('2015', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-01-01T00:00:00.000Z'),
			upperLimit: new Date('2016-01-01T00:00:00.000Z'),
			precision: 'year'
		}
	)
})

runTest('2015-11', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-01T00:00:00.000Z'),
			upperLimit: new Date('2015-12-01T00:00:00.000Z'),
			precision: 'month'
		}
	)
})

runTest('2015-11-24', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T00:00:00.000Z'),
			upperLimit: new Date('2015-11-25T00:00:00.000Z'),
			precision: 'day'
		}
	)
})

runTest('2015-11-24T21Z', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T21:00:00.000Z'),
			upperLimit: new Date('2015-11-24T22:00:00.000Z'),
			precision: 'hour'
		}
	)
})

runTest('2015-11-24T21.25Z', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T21:15:00.000Z'),
			upperLimit: new Date('2015-11-24T21:16:00.000Z'),
			precision: 'minute'
		}
	)
})

runTest('2015-11-24T21:37Z', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T21:37:00.000Z'),
			upperLimit: new Date('2015-11-24T21:38:00.000Z'),
			precision: 'minute'
		}
	)
})

runTest('2015-11-24T21:37.250Z', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T21:37:15.000Z'),
			upperLimit: new Date('2015-11-24T21:37:16.000Z'),
			precision: 'second'
		}
	)
})

runTest('2015-11-24T21:37:42Z', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T21:37:42.000Z'),
			upperLimit: new Date('2015-11-24T21:37:43.000Z'),
			precision: 'second'
		}
	)
})

runTest('2015-11-24T21:37:42.123Z', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title,
			lowerLimit: new Date('2015-11-24T21:37:42.123Z'),
			upperLimit: new Date('2015-11-24T21:37:42.124Z'),
			precision: 'millisecond'
		}
	)
})

runTest('2015-11-24 21:37:42.123', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'moment',
			string: test.title.replace(' ', 'T'),
			lowerLimit: new Date('2015-11-24T21:37:42.123Z'),
			upperLimit: new Date('2015-11-24T21:37:42.124Z'),
			precision: 'millisecond'
		}
	)
})
