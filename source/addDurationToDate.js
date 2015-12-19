import Duration from './Duration.js'

export default function (date, duration) {

	console.assert(
		date instanceof Date,
		date + ' is no instance of Date'
	)
	console.assert(
		duration instanceof Duration,
		duration + ' is no instance of Date'
	)

	let clone = new Date(date)

	if (duration.milliseconds)
		clone.setUTCMilliseconds(
			clone.getUTCMilliseconds() + duration.milliseconds
		)

	if (duration.seconds)
		clone.setUTCSeconds(clone.getUTCSeconds() + duration.seconds)

	if (duration.minutes)
		clone.setUTCMinutes(clone.getUTCMinutes() + duration.minutes)

	if (duration.hours)
		clone.setUTCHours(clone.getUTCHours() + duration.hours)

	if (duration.days)
		clone.setUTCDate(clone.getUTCDate() + duration.days)

	if (duration.weeks)
		clone.setUTCDate(clone.getUTCDate() + (duration.weeks * 7))

	if (duration.months)
		clone.setUTCMonth(clone.getUTCMonth() + duration.months)

	if (duration.years)
		clone.setUTCFullYear(clone.getUTCFullYear() + duration.years)

	return clone
}
