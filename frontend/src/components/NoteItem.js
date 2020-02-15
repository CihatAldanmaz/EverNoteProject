import React, { Component } from 'react'
import * as noteActions from "../redux/actions/notesActions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class NoteItem extends Component {
  render() {
    return (
      <li onClick ={() => this.props.actions.sideBarClickSuccess(this.props.note)}>
      <h2>{this.props.note.title}</h2>
      <p>{this.props.note.body}</p>
    </li>)
     }   
  }


  function mapStatetoProps(state) {
    return {
      object:state.singleObjectReducer,
      clicked:state.clickedReducer
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        sideBarClickSuccess: bindActionCreators(noteActions.sideBarClickSuccess, dispatch)
      }
    }
  }

  export default connect(mapStatetoProps,mapDispatchToProps)(NoteItem);




