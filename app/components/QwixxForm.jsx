import React from 'react'
import ReactDOM from 'react-dom'
import ColorRow from './ColorRow.jsx'

export default class QwixxForm extends React.Component {
	render() {
		return (
			<div>
				<ColorRow color="red" {...this.props}/>
				<ColorRow color="yellow" {...this.props}/>
				<ColorRow color="green" {...this.props}/>
				<ColorRow color="blue" {...this.props}/>
			</div>
		)
	}
}
