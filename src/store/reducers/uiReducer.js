import {
  UI_SET_ERROR,
  UI_SET_FINISH_LOADING,
  UI_SET_REMOVE_ERROR,
  UI_SET_REMOVE_SUCCESS,
  UI_SET_START_LOADING,
  UI_SET_SUCCESS,
} from "../types/uiType";

const initialState = {
  loading: false,
  msgSuccess: null,
  msgError: null,
};

/**
 * Reducer
 */

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_SET_SUCCESS: {
      return {
        ...state,
        msgSuccess: action.payload,
        msgError: null,
      };
    }
    case UI_SET_REMOVE_SUCCESS:
      return {
        ...state,
        msgSuccess: null,
      };
    case UI_SET_ERROR:
      return {
        ...state,
        msgError: action.payload,
        msgSuccess: null,
      };
    case UI_SET_REMOVE_ERROR:
      return {
        ...state,
        msgError: null,
      };
    case UI_SET_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UI_SET_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
