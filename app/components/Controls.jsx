import React from 'react'
import classNames from 'classnames'
import {clearAll} from '../actions/actionCreators'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import styles from './controls.scss'

@connect((state) => ({
  canUndo: state.fields.past.length > 0,
  canRedo: state.fields.future.length > 0,
	canClear: state.fields.present.red.length > 0 || state.fields.present.yellow.length > 0 || state.fields.present.green.length > 0 || state.fields.present.blue.length > 0 || state.fields.present.misthrows > 0,
}), {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
	clearAll,
})
class Controls extends React.Component {
  render() {
    const {canUndo, canRedo, canClear, onUndo, onRedo, clearAll} = this.props
		const optUndo = {}
		optUndo['onClick'] = canUndo ? onUndo : null
		const optRedo = {}
		optRedo['onClick'] = canRedo ? onRedo : null
		const optClear = {}
		optClear['onClick'] = canClear ? clearAll : null
		
    return (
      <div className={styles.controls}>
        <div
					className={classNames(styles.button, styles.undo)}
					disabled={!canUndo}
					{...optUndo}
				>
          <i className="fa fa-undo"></i> Undo
        </div>
        <div
					className={classNames(styles.button, styles.redo)}
					disabled={!canRedo}
					{...optRedo}
				>
          <i className="fa fa-repeat"></i> Redo
        </div>
        <div 
          className={classNames(styles.button, styles.clear)}
					disabled={!canClear}
					{...optClear}
        >
          <i className="fa fa-eraser"></i> Clear
        </div>
      </div>
    )
  }
}

export default Controls
