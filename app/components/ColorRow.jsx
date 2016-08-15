import React from 'react'
import ColorButton from './ColorButton.jsx'
import styles from './colorRow.scss'

export default class ColorRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // selected: [5]
        }
        // console.log(props)

        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log("ok")
        // this.setState({
        //     selected: this.state.push(i)
        // })
    }
    render() {
		const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
		let colorClass
		let values
		const {color, selectField, fields} = this.props
		const row = fields.present[color]
		const lock = <i className="fa fa-lock"></i>
		// console.log(lock)
		switch(color) {
			case "red":
				colorClass = "red";
				values = numbers.concat(lock);
				break;
			case "yellow":
				colorClass = "yellow";
				values = numbers.concat(lock);
				break;
			case "green":
				colorClass = "green";
				values = numbers.reverse().concat(lock);
				break;
			case "blue":
				colorClass = "blue";
				values = numbers.reverse().concat(lock);
				break;    
		}
		return (
			<div className={`${styles[colorClass]} ${styles.colorRow}`}>
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
						colorClass={colorClass}
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
}
