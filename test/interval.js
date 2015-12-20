import runTest from 'ava'
import expect from 'unexpected'
import Hour from '../build/index.js'

runTest('2015--2016', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'period',
			string: test.title,
			start: {
				lowerLimit: new Date('2015-01-01T00:00:00.000Z'),
				upperLimit: new Date('2016-01-01T00:00:00.000Z'),
				precision: 'year'
			},
			end: {
				lowerLimit: new Date('2016-01-01T00:00:00.000Z'),
				upperLimit: new Date('2017-01-01T00:00:00.000Z'),
				precision: 'year'
			}
		}
	)
})

runTest('2015-09--2015-11', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'period',
			string: test.title,
			start: {
				lowerLimit: new Date('2015-09-01T00:00:00.000Z'),
				upperLimit: new Date('2015-10-01T00:00:00.000Z'),
				precision: 'month'
			},
			end: {
				lowerLimit: new Date('2015-11-01T00:00:00.000Z'),
				upperLimit: new Date('2015-12-01T00:00:00.000Z'),
				precision: 'month'
			}
		}
	)
})

runTest('2015-11-24--2015-11-30', test => {
	expect(
		new Hour(test.title).toObject(),
		'to equal',
		{
			type: 'period',
			string: test.title,
			start: {
				lowerLimit: new Date('2015-11-24T00:00:00.000Z'),
				upperLimit: new Date('2015-11-25T00:00:00.000Z'),
				precision: 'day'
			},
			end: {
				lowerLimit: new Date('2015-11-30T00:00:00.000Z'),
				upperLimit: new Date('2015-12-01T00:00:00.000Z'),
				precision: 'day'
			}
		}
	)
})
