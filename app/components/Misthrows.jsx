import React from 'react'
import styles from './misthrows.scss'

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
        content = 'X'
      }
      misthrows.push(
        <div 
          className={styles.misthrow} 
          onClick={misthrow}
          key={i}
        >
          <span className={styles.x}>{content}</span>
        </div>
      )
    }
    return (
      <div className={styles.misthrows}>
        <div className={styles.info}>
          <i className="fa fa-thumbs-down"></i> = -5
        </div>
        <div className={styles.fields}>
          {misthrows}
        </div>
      </div>
    )
  }
}
