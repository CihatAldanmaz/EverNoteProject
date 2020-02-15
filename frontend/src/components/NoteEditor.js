import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as noteActions from "../redux/actions/notesActions"


class NoteEditor extends Component {
  state = {
    id: this.props.object.id,
    title: this.props.object.title,
    body: this.props.object.body
  };

  handleEditOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    //grammaryl giving error
    return (
      <form className="note-editor" onChange={e => this.handleEditOnChange(e)}>
        <input type="text" name="title" value={this.state.title} />
        <textarea name="body" value={this.state.body} />
        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            onClick={(e) => this.props.actions.editNote(this.state)}
          />
          <button type="button" onClick={this.props.actions.cancelEditSuccess}>
            Cancel
          </button>

        </div>
      </form>
    );
  }
}

function mapStatetoProps(state) {
  return {
    note:state.noteEditReducer,
    object:state.singleObjectReducer,
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      editNote: bindActionCreators(noteActions.editNote, dispatch),
      sideBarClickSuccess: bindActionCreators(noteActions.sideBarClickSuccess, dispatch),
      cancelEditSuccess: bindActionCreators(noteActions.cancelEditSuccess, dispatch)
    }
  }
}



export default connect(mapStatetoProps,mapDispatchToProps)(NoteEditor);
