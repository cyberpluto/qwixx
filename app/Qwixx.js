import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
require('file-loader?name=[name].[ext]!../index.html')

// Import Components
import App from './components/App.jsx'

// Store
import store from './store'

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
