import * as actionTypes from "../actions/actionTypes";

import initialState from "./initialState";



export default function noteListReducer(state = initialState.notes, action) {
  switch (action.type) {
    case actionTypes.GET_NOTES_SUCESS:
      return action.payload;
    
    case actionTypes.CREATE_NOTE_SUCCESS:
      return [...state, { ...action.payload }];
    case actionTypes.EDIT_NOTE_SUCCESS:
        
      var newState = state.map(noteItem => {
        if (noteItem.id === action.payload.id) {
        return   Object.assign(noteItem, action.payload);
        }
      return  noteItem
      });
      return newState;

    default:
      return state;
  }
}
