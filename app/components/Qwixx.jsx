var React = require('react');
var ReactDOM = require('react-dom');
var QwixxForm = require('./QwixxForm.jsx');
var Scores = require('./Scores.jsx');

var Qwixx = React.createClass({
  
	render: function() {
		let scores = [34, 56, 67, 12];
		return (
			<div className="container panel panel-default">
				<QwixxForm />
				<Scores scores={scores}/>
			</div>
		)
	}
});

ReactDOM.render(
  <Qwixx />,
  document.getElementById('app')
);
