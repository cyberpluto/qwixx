function fields(state = [], action) {
	// let selectedFields = Object.assign({}, state)
	switch(action.type) {
		case 'SELECT_FIELD':
			return {
				...state,
				[action.color]: state[action.color].concat(action.index) 
			}
		default:
			return state
	}

}
export default fields
