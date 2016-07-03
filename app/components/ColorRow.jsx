import React from 'react'
import ColorButton from './ColorButton.jsx'

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
			const row = fields[color]
			const lock = <i className="fa fa-lock"></i>
			// console.log(lock)
			switch(color) {
				case "red":
					colorClass = "danger";
					values = numbers.concat(lock);
					break;
				case "yellow":
					colorClass = "warning";
					values = numbers.concat(lock);
					break;
				case "green":
					colorClass = "success";
					values = numbers.reverse().concat(lock);
					break;
				case "blue":
					colorClass = "info";
					values = numbers.reverse().concat(lock);
					break;    
			}
			return (
				<div className={`alert alert-${colorClass}`}>
					{values.map(function(value, i) {
						const selected = row.includes(i)
						const disabled = (row.includes(i) || ( i < row[row.length - 1]))
						const options = {}
						if (i < values.length - 1 || row.includes(numbers.length - 1)) {
							options['onClick'] = selectField.bind(null, color, i)
						}
						return (<ColorButton
							colorClass={colorClass}
							key={i}
							selected={selected}
							disabled={disabled}
							{...options}
						>{value}</ColorButton>
						)            
					})}
				</div>
			)
    }
}
