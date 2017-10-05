import { combineReducers } from 'redux'
import { FETCH_FORM } from "../actions/index";

export default function (state = {firstName:"", lastName: "", e_mail:"", address:""}, action) {
  switch (action.type) {
    case FETCH_FORM:
      return action.data;

}
  return state;

}
