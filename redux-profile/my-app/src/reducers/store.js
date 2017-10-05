import { combineReducers } from "redux";
import FormReducer from "./reducer_profile";

const todoApp = combineReducers({
  form: FormReducer
});

export default todoApp;
