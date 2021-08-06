import { combineReducers } from "redux";
import { cityReducer, dataReducer, themeReducer } from "./Reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  city: cityReducer,
  data: dataReducer,
});

export default rootReducer;
