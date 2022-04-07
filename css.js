export default value => {

	const element = document.createElement('style')
	element.append(value)

    return element
}
