
import React, { Component } from 'react'
import * as noteActions from "../redux/actions/notesActions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Search extends Component {
  
 
  render() {
    return (
      <div className="filter">
      <input onChange = {(event) => {this.props.handleSearch(event)}}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
    )
  }
}


export default(Search);

