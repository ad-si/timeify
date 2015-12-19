export default function (string, character) {
	let elements = string.split(character)
	return (elements.length === 1) ? false : elements
}
