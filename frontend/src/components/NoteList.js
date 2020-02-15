
import React, { Component } from 'react'
import NoteItem from './NoteItem';
import * as noteActions from "../redux/actions/notesActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'



class NoteList extends Component {
  componentDidMount() {
    this.props.actions.getNotes()
    
  }
  
  render() {
    
    return (
      <ul>
        {this.props.notes.map((note,i) =>{
           return <NoteItem key={i} note={note} handleSidebarClick = {this.props.handleSidebarClick}
                      />
        })}
        
      </ul>
    );
  }
}

function mapStatetoProps(state) {
  return {
    notes:state.contentListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getNotes: bindActionCreators(noteActions.fetchNotes, dispatch)
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(NoteList);
