import React from 'react'
import classNames from 'classnames'
import styles from './colorButton.scss'

 const ColorButton = (props) => {
	const {color, children, selected, disabled, onClick} = props
	
	return (
		<div 
			className={classNames(
				{[`${styles.disabled}`]: disabled},
				{[`${styles.selected}`]: selected},
				styles.button,
				styles[color],
			)}
			onClick={onClick}
			disabled
		>
			{children}
		</div>
	)
}

export default ColorButton
