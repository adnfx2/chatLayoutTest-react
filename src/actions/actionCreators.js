import * as actionTypes from "./actionTypes";

export const setActiveUserId = id => ({
  type: actionTypes.SET_ACTIVE_USER_ID,
  payload: {
    id
  }
});

export const setTypingValue = value => ({
  type: actionTypes.SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId) => ({
  type: actionTypes.SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});
