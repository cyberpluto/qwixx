import React from 'react'
import QwixxForm from './QwixxForm.jsx'
import Scoring from './Scoring.jsx'
import Scores from './Scores.jsx'
import Controls from './Controls.jsx'
import styles from './main.scss'

const Main = (props) => 
	<div className={styles.main}>
		<div className={styles.container}>
			<div className={styles.qwixx}>
				<QwixxForm {...props}/>
				<Scoring {...props}/>
				<Scores {...props}/>
			</div>
			<Controls/>
		</div>
	</div>

export default Main
