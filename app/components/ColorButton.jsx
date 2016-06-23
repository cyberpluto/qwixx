var React = require('react');
var ReactDOM = require('react-dom');

var ColorButton = React.createClass({
	render: function() {
		var {colorClass, number} = this.props;
		return (
			<div className={`btn btn-${colorClass}`}>{number}</div>
		)
	}
});

module.exports = ColorButton;
