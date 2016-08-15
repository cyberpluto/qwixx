import React from 'react'

export default class Misthrows extends React.Component {
  constructor(props) {
      super(props)
  }
  handleClick() {
      console.log("ok")
  }
  render() {
    const {fields, misthrow} = this.props
    let misthrows =[]
    for ( let i = 0; i < 4; i++ ) {
      let content = "\xa0"
      if (i+1 <= fields.present.misthrows) {
        content = <i className="fa fa-times"></i>
      }
      misthrows.push(
        <div 
          className="btn btn-default" 
          onClick={misthrow}
          key={i}
        >
          {content}
        </div>
      )
    }
    return (
      <div>
        {misthrows}
      </div>
    )
  }
}
