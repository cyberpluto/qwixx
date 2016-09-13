import React from 'react'
import classNames from 'classnames'
import Misthrows from './Misthrows.jsx'
import styles from './scores.scss'

const Scores = (props) => {
		function calcScore(number) {
			return number > 0 ? calcScore(number - 1) + number : 0
		}
		const colors = [
			{color: 'red', symbol: '+'}, 
			{color: 'yellow', symbol: '+'}, 
			{color: 'green', symbol: '+'}, 
			{color: 'blue', symbol: '-'}, 
			{color: 'gray', symbol: '='}
		];
		const {fields} = props
		const scores = [
			calcScore(fields.present.red.length),
			calcScore(fields.present.yellow.length),
			calcScore(fields.present.green.length),
			calcScore(fields.present.blue.length),
			fields.present.misthrows * -5,
		]
		const totalScore = scores.reduce((a, b) => a + b, 0);
		return (
			<div>
				<div className={ styles.scores}>
					<span className={styles.text}>Totals</span>
					{scores.map(function(score, i) {
						return (
							<div className={styles.score}>
								<div className={classNames(
										styles[colors[i].color], 
										styles.box,
									)} 
									key={i}
								>
									<span>{(score !== 0) && score}</span>
								</div>
								<div className={styles.symbol}>
									{colors[i].symbol}
								</div>
							</div>
						)
					})}
					<div className={styles.score}>
						<div className={classNames(
								styles.totalScore,
								styles.box,
							)}
						>
							<span>{(totalScore !== 0) && totalScore}</span>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Scores
