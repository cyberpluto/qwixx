var React = require('react');
var ReactDOM = require('react-dom');

var Scores = React.createClass({
    render: function() {
				let colorClass = ['danger', 'warning', 'success', 'info'];
				let {scores} = this.props;
				let totalScore = scores.reduce((a, b) => a + b, 0);
        return (
            <div className="panel panel-default">
                <div className="panel-body">
									<div className="btn-group">
										{scores.map(function(score, i) {
											return (
												<div className={`btn btn-${colorClass[i]}`} key={i}>{score}</div>
											)
										})}
									</div>
									
									<div className="btn btn-default pull-right">{totalScore}</div>
                </div>
            </div>
        )
    }
});

module.exports = Scores;
