
import React, { Component,Fragment } from 'react'
import * as noteActions from "../redux/actions/notesActions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class NoteViewer extends Component {
  render() {
    return (
      <Fragment>
      <h2>{this.props.object.title}</h2>
      <p>{this.props.object.body}</p>
      <button onClick = {this.props.actions.handleEditClick}>Edit</button>
    </Fragment>
    )
  }
}



function mapStatetoProps(state) {
  return {
    object:state.singleObjectReducer,
    editClicked:state.editClickReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      handleEditClick: bindActionCreators(noteActions.editClickSuccess, dispatch)
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(NoteViewer);

