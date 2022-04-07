export default value =>

	props => {
		const element = document.createElement('div')

		element.copy(props)
				.attachShadow({ mode: 'open' })
				.append(...value(props))
                
		return element
	}
