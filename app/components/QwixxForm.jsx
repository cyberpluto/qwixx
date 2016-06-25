import React from 'react'
import ReactDOM from 'react-dom'
import ColorRow from './ColorRow.jsx'

export default class QwixxForm extends React.Component {
	render() {
		return (
			<div>
				<ColorRow color="red" />
				<ColorRow color="yellow" />
				<ColorRow color="green" />
				<ColorRow color="blue" />
			</div>
		)
	}
}
