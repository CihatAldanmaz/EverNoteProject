import * as actionTypes from "./actionTypes";
import axios from "axios";
import initialState from "../reducers/initialState"

export function getNotes(notes) {
  return {
    type: actionTypes.GET_NOTES_SUCESS,
    payload: notes
  };
}

export function searchNotes(word) {
  return {
    type:actionTypes.SEARCH_NOTES_SUCCESS,
    payload:word
  }
}

export function createNoteSuccess(note) {
  return {
    type: actionTypes.CREATE_NOTE_SUCCESS,
    payload: note
  };
}

export default function editNoteSucess(note) {
  return {
    type: actionTypes.EDIT_NOTE_SUCCESS,
    payload: note
  };
}

export function sideBarClickSuccess(obj) {
    
    return {
        type:actionTypes.SIDEBAR_CLICK_SUCCESS,
        payload:{obj:obj,clicked:true}
    }
}

export function editClickSuccess() {
    
    return {
        type:actionTypes.EDIT_CLICK_SUCCESS,
        payload:true
    }
}

export function cancelEditSuccess() {
    return {
        type:actionTypes.CANCEL_EDIT_SUCCESS,
        payload:true
    }
}


//Dispatchs

export function createNote() {
  return function(dispatch) {
    axios
      .post("https://evernotev2.herokuapp.com/api/v1/notes/", {
        headers: { "Content-Type": "application/json" },
        title: "Default",
        body: "PlaceHolder",
        user_id: 1
      })
      .then(resp => dispatch(createNoteSuccess(resp.data)));
  };
}

export function fetchNotes() {
  return function(dispatch) {
    let url = `https://evernotev2.herokuapp.com/api/v1/notes`;
    axios.get(url).then(data => dispatch(getNotes(data.data)));
  };
}

export function editNote(note) {
 
  return function(dispatch) {
    let url = `https://evernotev2.herokuapp.com/api/v1/notes/${note.id}`;
    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1
      })
    })
      .then(resp => resp.json())
      .then(resp =>dispatch(editNoteSucess(resp))
        );
  };
}


