import React, { Component } from "react";
import NoteList from "./NoteList";

//Redux imports
import * as noteActions from "../redux/actions/notesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList />
        <button onClick={e => this.props.actions.createNote(e)}>New</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createNote: bindActionCreators(noteActions.createNote, dispatch)
    }
  };
}

export default connect(null, mapDispatchToProps)(Sidebar);
