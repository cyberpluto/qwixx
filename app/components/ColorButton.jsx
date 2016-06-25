import React from 'react'

export default class ColorButton extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
					// selected: [5]
			}

			// this.handleClick = this.handleClick.bind(this)
	}
	// handleClick() {
	// 		console.log("ok")
	// }      
	render() {
		var {colorClass, number} = this.props
		return (
			<div 
				className={`btn btn-${colorClass}`}
			>
				{number}
			</div>
		)
	}
}
