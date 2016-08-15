import React from 'react'
import ReactDOM from 'react-dom'
import ColorRow from './ColorRow.jsx'
import styles from './qwixxForm.scss'

export default class QwixxForm extends React.Component {
	render() {
		return (
			<div className={styles.fields}>
				<ColorRow color="red" {...this.props}/>
				<ColorRow color="yellow" {...this.props}/>
				<ColorRow color="green" {...this.props}/>
				<ColorRow color="blue" {...this.props}/>
			</div>
		)
	}
}
