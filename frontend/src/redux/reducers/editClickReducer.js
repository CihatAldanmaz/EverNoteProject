import * as actionTypes from "../actions/actionTypes";

const initialState = {
    editClicked:false,
    sideBarClicked:false,
    nededinsen:false
    
}

export default function editClickReducer(state = initialState,action){
    switch (action.type) {
        case actionTypes.EDIT_CLICK_SUCCESS:
            return {
                ...state,
                editClicked:true
            }
            case actionTypes.SIDEBAR_CLICK_SUCCESS:
                return {
                    ...state,
                    sideBarClicked:true
                }
                case actionTypes.CANCEL_EDIT_SUCCESS:
                    return {
                        ...state,
                        editClicked:false
                    }
            
            
        default:
            return state
    }
}