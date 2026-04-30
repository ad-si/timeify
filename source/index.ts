import momentFromString, {Moment} from '@datatypes/moment'
import Duration from '@datatypes/duration'
import Interval, {RecurringInterval} from '@datatypes/interval'

export type TimeifyResult = Moment | Duration | Interval | RecurringInterval

export default (value: string): TimeifyResult => {
	if (!value || typeof value !== 'string') {
		throw new Error('Argument must be a string and not ' + value)
	}

	if (value.startsWith('P') || value.startsWith('p')) {
		return new Duration(value)
	}
	else if (value.startsWith('R') || value.startsWith('r')) {
		return new RecurringInterval(value)
	}
	else if (value.includes('--') || value.includes('/')) {
		return new Interval(value)
	}
	else {
		return momentFromString(value)
	}
}
