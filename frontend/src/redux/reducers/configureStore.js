import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./index";
import { composeWithDevTools } from "redux-devtools-extension";




export default function configureStore() {
    return createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))
}

