import element from './element.js'


export default value =>
	element(props => [
		value.style(props),
		value.template(props)
	])
