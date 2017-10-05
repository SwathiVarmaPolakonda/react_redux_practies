import { combineReducers } from "redux";
import QuizReducer from "./reducer_quiz";

const rootReducer = combineReducers({
  quiz: QuizReducer
});

export default rootReducer;
