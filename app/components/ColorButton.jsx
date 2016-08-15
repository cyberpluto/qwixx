import React from 'react'
import styles from './colorButton.scss'

export default class ColorButton extends React.Component {
	constructor(props) {
			super(props)
	}

	render() {
		const {colorClass, children, selected, disabled, onClick} = this.props

		return (
			<div 
				className={selected ? `${styles.button} ${colorClass} disabled` : (disabled ? `${styles.button} ${colorClass} disabled` : `${styles.button} ${colorClass}`)}
				onClick={onClick}
			>
				{children}
			</div>
		)
	}
}
