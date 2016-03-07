export default (dateString) => {

	let items = dateString.split('-')

	return {
		_dateString: dateString,
		_years: Number(items[0]),
		_months: Number(items[1]),
		_days: Number(items[2]),
	}
}
