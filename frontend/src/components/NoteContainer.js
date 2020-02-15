import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import axios from "axios";

class NoteContainer extends Component {
  state = {
    notes: [],
    singleContent: [],
    editClicked: false,
    sidebarClicked: false,
    submitClicked: false,
    searchValue: ""
  };

  handleSearch = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  filterSearch = () => {
    if (this.state.searchValue === "") {
      return this.state.notes;
    } else {
      return this.state.notes.filter(note =>
        note.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
      );
    }
  };

  render() {
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch} />
        <div className="container">
          <Sidebar
            handleSidebarClick={this.handleSidebarClick}
            handleNew={this.handleNew}
          />
          <Content
            singleContent={this.state.singleContent}
            editClicked={this.state.editClicked}
            handleEditClick={this.handleEditClick}
            submitNote={this.props.submitNote}
            handleSubmitButton={this.handleSubmitButton}
            handleCancel={this.handleCancel}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
