// //burada kaldi create a news action
// import * as actionTypes from "./actionTypes"
// import axios from "axios";


// export default function createNoteSuccess(note) {
//     return {
//         type:actionTypes.CREATE_NOTE_SUCCESS,
//         payload:note
//     }
// }

// export function createNote() {
    
//     return function(dispatch) {
//         axios.post('http://localhost:3000/api/v1/notes/',{
//     headers : {"Content-Type" : "application/json"},
//     title : "Default",
//     body : "PlaceHolder",
//     user_id: 1
//   })
//   .then(resp => dispatch(createNoteSuccess(resp)))
//     }
// }