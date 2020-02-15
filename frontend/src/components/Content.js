import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import { connect } from "react-redux";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.editClicked.editClicked) {
      return <NoteEditor />;
    } else if (this.props.sidebarClicked) {
      return <NoteViewer />;
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    sidebarClicked: state.clickedReducer,
    editClicked: state.editClickReducer
  };
}

export default connect(mapStatetoProps)(Content);
