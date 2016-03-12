import momentFromString from '@datatypes/moment'
import Duration from '@datatypes/duration'
import Interval, {RecurringInterval} from '@datatypes/interval'

export default (string) => {
	if (!string || typeof string !== 'string') {
		throw new Error('Argument must be a string and not ' + string)
	}

	if (string.startsWith('P') || string.startsWith('p')) {
		return new Duration(string)
	}
	else if (string.startsWith('R') || string.startsWith('r')) {
		return new RecurringInterval(string)
	}
	else if (string.includes('--') || string.includes('/')) {
		return new Interval(string)
	}
	else {
		return momentFromString(string)
	}
}
