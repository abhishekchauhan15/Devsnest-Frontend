import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    countre: counterReducer
});  

export default rootReducer;