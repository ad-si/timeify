import expect from 'unexpected'
import Hour from '../source/index.js'

expect(
	new Hour('2015-11-24').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24',
		lowerLimit: new Date('2015-11-24T00:00:00.000Z'),
		upperLimit: new Date('2015-11-25T00:00:00.000Z'),
		precision: 'day'
	}
)

expect(
	new Hour('2015-11-24--2015-11-30').toObject(),
	'to equal',
	{
		type: 'period',
		string: '2015-11-24--2015-11-30',
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

expect(
	new Hour('2015--2016').toObject(),
	'to equal',
	{
		type: 'period',
		string: '2015--2016',
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

// assert.equal(
// 	new Hour('2015-11-24T21:32:43Z').toObject(),
// 	'2015-11-24T21:32:43Z'
// )
//
// assert.equal(
// 	new Hour('20151124T213243Z').toObject(),
// 	'2015-11-24T21:32:43Z'
// )
//
// assert.equal(
// 	new Hour('20151124T213243Z').toObject(),
// 	'2015-11-24T21:32:43Z'
// )
