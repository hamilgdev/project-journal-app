import { SET_AUTH_LOGIN, SET_AUTH_LOGOUT } from "../types/authType";

/**
 * Reducer
 */
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH_LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case SET_AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};
