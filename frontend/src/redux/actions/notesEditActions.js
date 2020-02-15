import * as actionTypes from "./actionTypes"
import axios from "axios";

export default function editNoteSucess(note) {
    return {
        type:actionTypes.EDIT_NOTE_SUCCESS,
        payload:note
    }
}

export function editNote(e,note) {
    
    return function(dispatch) {
        let url = `http://localhost:3000/api/v1/notes/${note.id}`
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
          .then(resp => dispatch(editNoteSucess(resp),console.log(resp)))
          
    }
    
}