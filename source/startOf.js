export function year (object) {
	object.months = 1
	month(object)
}

export function month (object) {
	object.days = 1
	day(object)
}

export function day (object) {
	object.hours = 0
	hour(object)
}

export function hour (object) {
	object.minutes = 0
	minute(object)
}

export function minute (object) {
	object.seconds = 0
	second(object)
}

export function second (object) {
	object.milliseconds = 0
	object.precision = 'millisecond'
}
