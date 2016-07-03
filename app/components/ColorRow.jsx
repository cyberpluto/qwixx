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
		let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        let colorClass
        let values
        const {color, selectField, fields} = this.props
				const row = fields[color]
				// console.log(row)
        switch(color) {
            case "red":
                colorClass = "danger";
                values = numbers;
                break;
            case "yellow":
                colorClass = "warning";
                values = numbers;
                break;
            case "green":
                colorClass = "success";
                values = numbers.reverse();
                break;
            case "blue":
                colorClass = "info";
                values = numbers.reverse();
                break;    
        }
        return (
            <div className={`alert alert-${colorClass}`}>
                {values.map(function(value, i) {
										const selected = row.includes(i)
										const disabled = (row.includes(i) || ( i < row[row.length - 1]))
                    return (<ColorButton
                        colorClass={colorClass}
                        key={i}
                        onClick={selectField.bind(null, color, i)}
												selected={selected}
												disabled={disabled}
                    >{value}</ColorButton>
										)            
                })}
								<ColorButton
									colorClass={colorClass}
									onClick={selectField.bind(null, color, 12)}
								>
									<i className="fa fa-lock"></i>
								</ColorButton>
            </div>
        )
    }
}
