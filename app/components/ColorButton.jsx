import React from 'react'

export default class ColorButton extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
					// selected: [5]
			}
	}

	render() {
		const {colorClass, number, selected, disabled, onClick} = this.props
		// console.log(selected)
		const options = {}
		if (!selected && !disabled) {
			options['onClick'] = onClick
		}
		return (
			<div 
				className={selected ? `btn btn-default disabled` : (disabled ? `btn btn-${colorClass} disabled` : `btn btn-${colorClass}`)}
				{...options}
			>
				{number}
			</div>
		)
	}
}
