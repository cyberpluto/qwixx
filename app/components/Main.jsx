import React from 'react'

// Import Components
import QwixxForm from './QwixxForm.jsx'
import Scores from './Scores.jsx'

export default class Main extends React.Component {
	render() {
		return (
			<div className="container panel panel-default">
				<QwixxForm {...this.props}/>
				<Scores {...this.props}/>
			</div>
		)
	}
}