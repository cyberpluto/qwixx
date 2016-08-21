import React from 'react'

// Import Components
import QwixxForm from './QwixxForm.jsx'
import Scoring from './Scoring.jsx'
import Scores from './Scores.jsx'
import styles from './main.scss'

export default class Main extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<QwixxForm {...this.props}/>
				<Scoring />
				<Scores {...this.props}/>
			</div>
		)
	}
}