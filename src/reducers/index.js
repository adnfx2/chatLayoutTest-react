import { combineReducers } from "redux";
import * as actionTypes from "../actions/actionTypes";
import * as staticJSON from "../static-data";

const contacts = (state = staticJSON.contacts, action) => {
  switch (action.type) {
    case actionTypes.TEST:
    default:
      return state;
  }
};

const user = (state = staticJSON.generateUser(), action) => {
  switch (action.type) {
    case actionTypes.TEST:
    default:
      return state;
  }
};

const activeUserId = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_USER_ID:
      return action.payload.id;
    default:
      return state;
  }
};

const messages = (state = staticJSON.getMessages(10), action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        [action.payload.userId]: message(state[action.payload.userId], action)
      };
    default:
      return state;
  }
};

const message = (state = {}, action) => {
  const length = Object.keys(state).length;
  const message = {
    is_user_msg: true,
    number: +length,
    text: action.payload.message
  };
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        [length]: message
      };
    default:
      return state;
  }
};

const typing = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SET_TYPING_VALUE:
      return action.payload;
    case actionTypes.SEND_MESSAGE:
      return "";
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  activeUserId,
  contacts,
  messages,
  typing
});

export default rootReducer;
