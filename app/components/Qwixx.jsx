import React from 'react'
import ReactDOM from 'react-dom'
import QwixxForm from './QwixxForm.jsx'
import Scores from './Scores.jsx'

export default class Qwixx extends React.Component {
	render() {
		let scores = [34, 56, 67, 12]
		return (
			<div className="container panel panel-default">
				<QwixxForm />
				<Scores scores={scores}/>
			</div>
		)
	}
}

ReactDOM.render(
  <Qwixx />,
  document.getElementById('app')
);
