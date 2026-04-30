declare module '@datatypes/duration' {
	export interface DurationObject {
		string: string
		isAccurate: boolean
		days: number
		hours: number
		minutes: number
		seconds: number
		milliseconds: number
	}

	export default class Duration {
		constructor(value: string)
		object: DurationObject
	}
}

declare module '@datatypes/moment' {
	export interface MomentObject {
		string: string
		lowerLimit: Date
		upperLimit: Date
	}

	export class Moment {
		constructor(value?: string | Date)
		object: MomentObject
		string: string
	}

	export class Year extends Moment {}
	export class Month extends Moment {}
	export class Day extends Moment {}
	export class Hour extends Moment {}
	export class Minute extends Moment {}
	export class Second extends Moment {}
	export class Millisecond extends Moment {}

	const fromString: (value: string) => Moment
	export default fromString
}

declare module '@datatypes/interval' {
	import Duration from '@datatypes/duration'
	import {Moment} from '@datatypes/moment'

	export interface IntervalObject {
		string: string
		start: Moment
		end: Moment
		duration: Duration
	}

	export interface RecurringIntervalObject extends IntervalObject {
		numberOfRecurrences: number
	}

	export default class Interval {
		constructor(value: string)
		object: IntervalObject
	}

	export class RecurringInterval {
		constructor(value: string)
		object: RecurringIntervalObject
	}
}

declare module 'unexpected' {
	interface Expect {
		(subject: unknown, assertion: string, ...args: unknown[]): unknown
	}
	const expect: Expect
	export default expect
}
