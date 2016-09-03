import React from 'react'
import ColorButton from './ColorButton.jsx'
import styles from './colorRow.scss'

const ColorRow = (props) => {
	const {color, selectField, fields} = props
	const row = fields.present[color]
	const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	const lock = <i className="fa fa-unlock-alt"></i>
	
	let values
	if (color === "red" || color === "yellow") {
			values = numbers.concat(lock);
	} else if (color === "green" || color === "blue") {
			values = numbers.reverse().concat(lock);
	}

	return (
		<div className={`${styles[color]} ${styles.colorRow}`}>
			<div className={styles.buttonsWrapper}>
			{values.map(function(value, i) {
				const lastNumberId = numbers.length - 1
				const lockId = values.length - 1
				const lowerThanSelected = i < row[row.length -1]
				const selected = row.includes(i)
				const disabled = selected || lowerThanSelected
				const options = {}
				if (i != lastNumberId && i != lockId && !disabled) {
					options['onClick'] = selectField.bind(null, color, i)
				} else if (i == lastNumberId && row.length > 4) {
					options['onClick'] = selectField.bind(null, color, i)
				} else if (i == lockId && row.includes(lastNumberId)) {
					options['onClick'] = selectField.bind(null, color, i)
				}
				return (<ColorButton
					color={color}
					selected={selected}
					disabled={disabled}
					key={i}
					{...options}
				>{value}</ColorButton>
				)            
			})}
			</div>
		</div>
	)
}

export default ColorRow
