import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

// Import Components
import App from './components/App.jsx'

// Store
import store, {history} from './store'

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}/>
		</Router>
	</Provider>,
	document.getElementById('root')
)
