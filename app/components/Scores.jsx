var React = require('react');
var ReactDOM = require('react-dom');

var Scores = React.createClass({
	render: function() {
		function calcScore(number) {
			return number > 0 ? calcScore(number - 1) + number : 0
		}
		const colorClass = ['danger', 'warning', 'success', 'info'];
		const {fields, clearAll} = this.props;
		const scores = [
			calcScore(fields.red.length),
			calcScore(fields.yellow.length),
			calcScore(fields.green.length),
			calcScore(fields.blue.length)
		]
		const totalScore = scores.reduce((a, b) => a + b, 0);
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="btn-group">
						{scores.map(function(score, i) {
							return (
								<div className={`btn btn-${colorClass[i]}`} key={i}>{score}</div>
							)
						})}
						<div className="btn btn-default">{totalScore}</div>
					</div>
					
					<div className="btn-group pull-right">
						<div 
							className="btn btn-default"
							onClick={clearAll}
						>
							<i className="fa fa-eraser"></i> Clear
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Scores;
