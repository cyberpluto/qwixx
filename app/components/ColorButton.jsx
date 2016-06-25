import React from 'react'

export default class ColorButton extends React.Component {
	render() {
		var {colorClass, number} = this.props;
		return (
			<div className={`btn btn-${colorClass}`}>{number}</div>
		)
	}
}
