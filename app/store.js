import {createStore, compose} from 'redux'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {
	fields: {
		past: [],
		present: {
			red: [],
			yellow: [],
			green: [],
			blue: [],
			misthrows: 0,
		},
		future: [],
	},
}

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export default store
