var React = require('react');
var ReactDOM = require('react-dom');
import UndoRedo from './UndoRedo.jsx'
import Misthrows from './Misthrows.jsx'
import styles from './scores.scss'

var Scores = React.createClass({
	render: function() {
		function calcScore(number) {
			return number > 0 ? calcScore(number - 1) + number : 0
		}
		const colorClass = ['danger', 'warning', 'success', 'info', 'default'];
		const {fields, clearAll} = this.props
		const scores = [
			calcScore(fields.present.red.length),
			calcScore(fields.present.yellow.length),
			calcScore(fields.present.green.length),
			calcScore(fields.present.blue.length),
			fields.present.misthrows * -5,
		]
		const totalScore = scores.reduce((a, b) => a + b, 0);
		return (
			<div className={ styles.test}>
				<div className="panel-body">
					<div className="btn-group">
						{scores.map(function(score, i) {
							return (
								<div className={`btn btn-${colorClass[i]}`} key={i}>{score}</div>
							)
						})}
						<div className="btn btn-default"><strong>{totalScore}</strong></div>
					</div>

					<div className="btn-group pull-right">
						<div 
							className="btn btn-default"
							onClick={clearAll}
						>
							<i className="fa fa-eraser"></i> Clear
						</div>
					</div>

					<Misthrows {...this.props}/>

					<UndoRedo />

				</div>
			</div>
		)
	}
});

module.exports = Scores;
