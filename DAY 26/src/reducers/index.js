import inputReducer from "./inputReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ input: inputReducer });

export default rootReducer;
