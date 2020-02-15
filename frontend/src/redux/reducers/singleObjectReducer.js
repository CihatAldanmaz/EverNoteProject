import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function singleObjectReducer(state = initialState.singleContent,action){
    switch (action.type) {
        case actionTypes.SIDEBAR_CLICK_SUCCESS:
            return action.payload.obj
        default:
            return state
    }
}