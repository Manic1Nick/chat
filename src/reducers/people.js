const initState = [
	'Alex',
	'John',
	'Sam',
	'Andrew',
	'George',
	'Nick'
]

const peopleReducer = (state = initState, action) => {
	/*switch(action.type) {
		case 'ADD_NEW_USER':
			return state.concat('New user ' + Date.now())
	}
	return state*/
	if( action.type === 'ADD_NEW_USER' ) {
		return state.concat('New user ' + Date.now())
	}
	return state
}

export default peopleReducer