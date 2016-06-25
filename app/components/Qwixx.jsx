import React from 'react'
import ReactDOM from 'react-dom'

// Import Components
import QwixxForm from './QwixxForm.jsx'
import Scores from './Scores.jsx'

// Store
import { Provider } from 'react-redux'
import store from '../store'

console.log(store)

export default class Qwixx extends React.Component {
	render() {
		let scores = [34, 56, 67, 12]
		return (
			<Provider store={store}>
				<div className="container panel panel-default">
					<QwixxForm />
					<Scores scores={scores}/>
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(<Qwixx />, document.getElementById('app'));
