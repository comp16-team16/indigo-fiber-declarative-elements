import element from './element.js'
import css from './css.js'


export default value =>
	element((...child) => [
		css(...value),
		...child
 	])
