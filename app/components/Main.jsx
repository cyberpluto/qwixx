import React from 'react'
import QwixxForm from './QwixxForm.jsx'
import Scoring from './Scoring.jsx'
import Scores from './Scores.jsx'
import styles from './main.scss'

const Main = (props) => 
	<div className={styles.container}>
		<QwixxForm {...props}/>
		<Scoring {...props}/>
		<Scores {...props}/>
	</div>

export default Main
