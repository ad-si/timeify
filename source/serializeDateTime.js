import serializeDate from './serializeDate'
import serializeTime from './serializeTime'

export default (object) =>
	serializeDate(object) + 'T' + serializeTime(object) + 'Z'
