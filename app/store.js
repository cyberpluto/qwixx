import {createStore, compose} from 'redux'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {
	fields: {
		red: [],
		yellow: [],
		green: [],
		blue: []
	}
}
const store = createStore(rootReducer, defaultState)

export default store