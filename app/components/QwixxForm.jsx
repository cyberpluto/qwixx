var React = require('react');
var ReactDOM = require('react-dom');
var ColorRow = require('./ColorRow.jsx');

var QwixxForm = React.createClass({
	render: function() {
		return (
			<div>
			  <ColorRow color="red" />
			  <ColorRow color="yellow" />
			  <ColorRow color="green" />
			  <ColorRow color="blue" />
			</div>
		)
	}
});

module.exports = QwixxForm;
