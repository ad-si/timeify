import runTest from 'ava'
import expect from 'unexpected'

import timeify from '../source/index'
import {Day as Day} from '@datatypes/moment'
import Duration from '@datatypes/duration'


runTest('moment', test => {
	const moment = timeify('2015-11-24T18:43')
	const momentObject = {
		string: '2015-11-24T18:43Z',
		lowerLimit: new Date('2015-11-24T18:43'),
		upperLimit: new Date('2015-11-24T18:44'),
	}
	expect(moment.object, 'to equal', momentObject)
})


runTest('duration', test => {
	const duration = timeify('P2DT10H37M24.345S')
	const durationObject = {
		string: 'P2DT10H37M24.345S',
		isAccurate: false,
		days: 2,
		hours: 10,
		minutes: 37,
		seconds: 24,
		milliseconds: 345,
	}
	expect(duration.object, 'to equal', durationObject)
})


runTest('interval', test => {
	const interval = timeify('2015-11-24--2015-11-26')
	const startDay = new Day('2015-11-24')
	const endDay = new Day('2015-11-26')
	const intervalObject = {
		string: '2015-11-24--2015-11-26',
		start: startDay,
		end: endDay,
		duration: new Duration('P72H0M0.0S')
	}
	startDay.string
	endDay.string

	expect(interval.object, 'to equal', intervalObject)
})


runTest('recurringInterval', test => {
	const interval = timeify('R3/2015-11-24/P1D')
	const startDay = new Day('2015-11-24')
	const endDay = new Day('2015-11-25')
	const intervalObject = {
		string: 'R3--2015-11-24--P1D',
		start: startDay,
		end: endDay,
		duration: new Duration('P1D'),
		numberOfRecurrences: 3,
	}
	startDay.string

	expect(interval.object, 'to equal', intervalObject)
})
