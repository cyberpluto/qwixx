import React from 'react'
import ColorButton from './ColorButton.jsx'

export default class ColorRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // selected: [5]
        }

        this.handleClick = this.handleClick.bind(this)
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
        let fields
        switch(this.props.color) {
            case "red":
                colorClass = "danger";
                fields = numbers;
                break;
            case "yellow":
                colorClass = "warning";
                fields = numbers;
                break;
            case "green":
                colorClass = "success";
                fields = numbers.reverse();
                break;
            case "blue":
                colorClass = "info";
                fields = numbers.reverse();
                break;    
        }
        return (
            <div className={`alert alert-${colorClass}`}>
                {fields.map(function(field, i) {
                    return (<ColorButton 
                        className={`btn ${colorClass}`}
                        colorClass={colorClass}
                        number={field}
                        key={i}
                        onClick={() => this.handleClick()}
                    />)            
                })}
            </div>
        )
    }
}
