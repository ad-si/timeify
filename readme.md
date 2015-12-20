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


## Methods

### `toObject`

Returns a plain-object representation of the Hour instance.

```
new Hour('2015-11-24T21:37:42.123Z').toObject() === {
	type: 'moment',
	string: test.title,
	lowerLimit: new Date('2015-11-24T21:37:42.123Z'),
	upperLimit: new Date('2015-11-24T21:37:42.124Z'),
	precision: 'millisecond'
}
```

### `toJSON`

Returns a JSON representation of the Hour instance.

```
new Hour('2015-11-24').toJSON() === '{' +
	'"type":"moment",' +
	'"string":"2015-11-24",' +
	'"precision":"day",' +
	'"lowerLimit":"2015-11-24T00:00:00.000Z",' +
	'"upperLimit":"2015-11-25T00:00:00.000Z"' +
'}'
```

### `toString`

Returns a JSON representation of the Hour instance.

```
new Hour('2015-11-24T21:37:42.123Z').toString() === '2015-11-24T21:37:42.123Z'
```
