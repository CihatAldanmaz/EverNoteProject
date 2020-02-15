import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function singleObjectReducer(state = initialState.sideBarClicked,action){
    switch (action.type) {
        case actionTypes.SIDEBAR_CLICK_SUCCESS:
            return action.payload.clicked
            
        default:
            return state
    }
}

