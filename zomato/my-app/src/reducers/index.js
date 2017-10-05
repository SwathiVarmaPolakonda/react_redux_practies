import { combineReducers } from "redux";
import RestaurantReducer from "./reducer_weather";

const rootReducer = combineReducers({
  restaurant: RestaurantReducer
});

export default rootReducer;
