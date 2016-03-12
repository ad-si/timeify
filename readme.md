# Timeify

ISO 8601 based time and date module.
Parses an ISO string and returns an instance of the corresponding class.

Check out the respective packages for details:

- [Moment](https://github.com/datatypesjs/moment)
- [Duration](https://github.com/datatypesjs/duration)
- [Interval and RecurringInterval](https://github.com/datatypesjs/interval)


## Installation

```shell
npm install --save timeify
```


## Usage

```js
const timeify = require('timeify')

const moment = timeify('2015-11-24T21:32:43')
const duration = timeify('P2DT10H37M24.345S')
const interval = timeify('2015-11-24--2015-11-26')
const recurringInterval = timeify('R3/2015-11-24/P1D')
```

Possible formats for the time-string (when a string can be interpreted as a date or a time, date takes precedence)

1. Date
	- Millennium: '2'
	- Century: `20`
	- Decade: `201`
	- Year: `2015`, `0002`
	- Month: `2015-11`
	- Week:
		- `2015-W48`
		- `2015W48`
	- Day:
		- `2015-11-24`
		- `20151124`
		- `2015-W48-2`
		- `2015W482`
		- `2015-328`
		- `2015328`

2. Time of Day (currently not supported as standalone version)
	- Hour: `21`
	- Minute:
		- `21:32`
		- `2132`
	- Second:
		- `21:32:43`
		- `213243`
	- Millisecond:
		- `21:32:43.654`
		- `213243.654`

3. Date Time
	- `<date>T<time>`
	- `<date> <time>`

4. Duration
	- `P<datetime>`
	- Year: `P1Y`
	- Month: `P1M`
	- Week: `P1W`
	- Day: `P1D`
	- Hour:
		- `P1H`
		- `PT1H`
	- Minute:
		- `PT1M`
	- Second:
		- `P1S`
		- `PT1S`

5. Time Interval
	- `<start-datetime>/<end-datetime>`
	- `<start-datetime>--<end-datetime>`

	- `<start-datetime>/<duration>`
	- `<start-datetime>--<duration>`

	- `<duration>/<end-datetime>`
	- `<duration>--<end-datetime>`

	- `duration` + context information

6. Recurring Interval
	- `R<number-of-recurrences>/<time-interval>`


## Conventions

In contrast to the ISO 8601 standard
this module assumes that times points are specified in UTC per default.
This means in order to work with local times
they must be explicitly entered with their offset (e.g. `17:45:34+0300`)
or the relevant flags must be set.
This also means that the `Z` to denote UTC times is optional.

In order to fix the naming schema of native classes and unify it
with the usage in the ISO 8601 specification
the internal `Instant` class encapsulates the Javascript `Date` class.
It defines an infinitely accurate moment in time.
