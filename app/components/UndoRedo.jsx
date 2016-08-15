import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className="btn-group pull-right">
    <div className="btn btn-default" onClick={onUndo} disabled={!canUndo}>
      <i className="fa fa-undo"></i> Undo
    </div>
    <div className="btn btn-default" onClick={onRedo} disabled={!canRedo}>
      <i className="fa fa-repeat"></i> Redo
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    canUndo: state.fields.past.length > 0,
    canRedo: state.fields.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo