import undoable, { distinctState } from 'redux-undo'

function fields(state = [], action) {
	// let selectedFields = Object.assign({}, state)
	switch(action.type) {
		case 'SELECT_FIELD':
			return {
				...state,
				[action.color]: state[action.color].concat(action.index) 
			}
		case 'MISTHROW':
			return {
				...state,
				misthrows: state.misthrows < 4 ? state.misthrows + 1 : 4
			}
		case 'CLEAR_ALL':
			return {
				...state,
				red: [],
				yellow: [],
				green: [],
				blue: [],
				misthrows: 0,
			}
		default:
			return state
	}

}

const undoableFields = undoable(fields, {
	filter: distinctState()
})

export default undoableFields
