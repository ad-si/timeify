# Hour

ISO 8601 based time and date module.
Support for dates, times, duration and time intervals in UTC.


## Installation

```shell
npm install --save hour
```


## Usage

```js
const Hour = require('hour')

new Hour('2015-11-24T21:32:43Z')
```

Possible formats for the time-string
(when a string can be interpreted as a date or a time, date takes precedence)

1. Date
	- Century: '2'
	- Decade: `20`
	- Year: `2015`
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

1. Time
	- Minute:
		- `21:32`
		- `2132`
	- Second:
		- `21:32:43`
		- `213243`
	- Millisecond:
		- `21:32:43.654`
		- `213243.654`

1. Datetime
	- `<date>T<time>`
	- `<date> <time>`

1. Duration
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

1. Time Intervals
	- `<start-datetime>/<end-datetime>`
	- `<start-datetime>--<end-datetime>`

	- `<start-datetime>/<duration>`
	- `<start-datetime>--<duration>`

	- `<duration>/<end-datetime>`
	- `<duration>--<end-datetime>`

	- `duration` + context information

1. Repeating Intervals
	- `R<number-of-repetitions>/<time-interval>`
