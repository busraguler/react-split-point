import { combineReducers } from "redux";
import splitGridReducer from "../modules/splitGrid/reducer";

const reducers = combineReducers({ splitGrid: splitGridReducer });
export default reducers;
