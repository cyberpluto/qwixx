import React from 'react'

export default class ColorButton extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
					// selected: [5]
			}
	}

	render() {
		const {colorClass, number, onClick} = this.props
		// console.log(selectField)
		return (
			<div 
				className={`btn btn-${colorClass}`}
				onClick={onClick}
			>
				{number}
			</div>
		)
	}
}
