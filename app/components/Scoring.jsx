import React from 'react'
import Misthrows from './Misthrows.jsx'
import styles from './scoring.scss'

const points = [
	[1, 1], [2, 3], [3, 6], [4, 10], [5, 15], [6, 21], [7, 28], [8, 36], [9, 45], [10, 55], [11, 66], [12, 78],
]

const Scoring = (props) => 
  <div className={styles.scoring}>
		<div className={styles.example}>
			<div className={styles.field}>X</div>
			<div className={styles.text}>
				Body<br/> Punkty
			</div>
		</div>
		{points.map((point, i) => { return (
			<div className={styles.point}>
				<div className={styles.crosses}>
					{point[0]}x
				</div>
				<div className={styles.scores}>
					{point[1]}
				</div>
			</div>
		)})}
		<Misthrows {...props}/>
	</div>

export default Scoring
