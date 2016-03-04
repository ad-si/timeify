export default (dateString) => {

	let items = dateString.split('-')

	return {
		string: dateString,
		year: items[0],
		month: items[1],
		day: items[2]
	}
}
