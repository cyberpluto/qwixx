import React from 'react'

export default class ColorButton extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
					// selected: [5]
			}
	}

	render() {
		const {colorClass, children, selected, disabled, onClick} = this.props

		return (
			<div 
				className={selected ? `btn btn-default disabled` : (disabled ? `btn btn-${colorClass} disabled` : `btn btn-${colorClass}`)}
				onClick={onClick}
			>
				{children}
			</div>
		)
	}
}
