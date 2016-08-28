import React from 'react'
import ReactDOM from 'react-dom'
import ColorRow from './ColorRow.jsx'
import styles from './qwixxForm.scss'

const colors = ['red', 'yellow', 'green', 'blue']

const QwixxForm = (props) => 
	<div className={styles.fields}>
		{colors.map((color) => 
			<ColorRow color={color} key={color} {...props}/>
		)}
	</div>

export default QwixxForm
