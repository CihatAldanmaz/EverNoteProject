import {combineReducers} from "redux"
import contentListReducer from "./contentListReducer"
import noteEditReducer from "./noteEditReducer";
import noteCreateReducer from "./noteCreateReducer";
import singleObjectReducer from "./singleObjectReducer";
import clickedReducer from "./clickedReducer"
import editClickReducer from "./editClickReducer"




const rootreducer = combineReducers({
    contentListReducer,
    noteEditReducer,
    noteCreateReducer,
    singleObjectReducer,
    clickedReducer,
    editClickReducer,
    
})

export default rootreducer;