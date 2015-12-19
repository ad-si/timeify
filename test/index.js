import expect from 'unexpected'
import Hour from '../source/index.js'

expect(
	new Hour('2').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2',
		lowerLimit: new Date('2000-01-01T00:00:00.000Z'),
		upperLimit: new Date('3000-01-01T00:00:00.000Z'),
		precision: 'millennium'
	}
)

expect(
	new Hour('20').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '20',
		lowerLimit: new Date('2000-01-01T00:00:00.000Z'),
		upperLimit: new Date('2100-01-01T00:00:00.000Z'),
		precision: 'century'
	}
)

expect(
	new Hour('200').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '200',
		lowerLimit: new Date('2000-01-01T00:00:00.000Z'),
		upperLimit: new Date('2010-01-01T00:00:00.000Z'),
		precision: 'decade'
	}
)

expect(
	new Hour('2015').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015',
		lowerLimit: new Date('2015-01-01T00:00:00.000Z'),
		upperLimit: new Date('2016-01-01T00:00:00.000Z'),
		precision: 'year'
	}
)

expect(
	new Hour('2015-11').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11',
		lowerLimit: new Date('2015-11-01T00:00:00.000Z'),
		upperLimit: new Date('2015-12-01T00:00:00.000Z'),
		precision: 'month'
	}
)

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
	new Hour('2015-11-24T21Z').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24T21Z',
		lowerLimit: new Date('2015-11-24T21:00:00.000Z'),
		upperLimit: new Date('2015-11-24T22:00:00.000Z'),
		precision: 'hour'
	}
)

expect(
	new Hour('2015-11-24T21.25Z').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24T21.25Z',
		lowerLimit: new Date('2015-11-24T21:15:00.000Z'),
		upperLimit: new Date('2015-11-24T21:16:00.000Z'),
		precision: 'minute'
	}
)

expect(
	new Hour('2015-11-24T21:37Z').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24T21:37Z',
		lowerLimit: new Date('2015-11-24T21:37:00.000Z'),
		upperLimit: new Date('2015-11-24T21:38:00.000Z'),
		precision: 'minute'
	}
)

expect(
	new Hour('2015-11-24T21:37.250Z').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24T21:37.250Z',
		lowerLimit: new Date('2015-11-24T21:37:15.000Z'),
		upperLimit: new Date('2015-11-24T21:37:16.000Z'),
		precision: 'second'
	}
)

expect(
	new Hour('2015-11-24T21:37:42Z').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24T21:37:42Z',
		lowerLimit: new Date('2015-11-24T21:37:42.000Z'),
		upperLimit: new Date('2015-11-24T21:37:43.000Z'),
		precision: 'second'
	}
)

expect(
	new Hour('2015-11-24T21:37:42.123Z').toObject(),
	'to equal',
	{
		type: 'moment',
		string: '2015-11-24T21:37:42.123Z',
		lowerLimit: new Date('2015-11-24T21:37:42.123Z'),
		upperLimit: new Date('2015-11-24T21:37:42.124Z'),
		precision: 'millisecond'
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
