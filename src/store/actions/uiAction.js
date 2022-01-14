import {
  UI_SET_ERROR,
  UI_SET_FINISH_LOADING,
  UI_SET_REMOVE_ERROR,
  UI_SET_REMOVE_SUCCESS,
  UI_SET_START_LOADING,
  UI_SET_SUCCESS,
} from "../types/uiType";

/**
 * Actions creators
 */

export const setSuccess = (success) => {
  return {
    type: UI_SET_SUCCESS,
    payload: success,
  };
};

export const removeSuccess = () => {
  return {
    type: UI_SET_REMOVE_SUCCESS,
  };
};

export const setError = (error) => {
  return {
    type: UI_SET_ERROR,
    payload: error,
  };
};

export const removeError = () => {
  return {
    type: UI_SET_REMOVE_ERROR,
  };
};

export const startLoading = () => {
  return {
    type: UI_SET_START_LOADING,
  };
};

export const finishLoading = () => {
  return {
    type: UI_SET_FINISH_LOADING,
  };
};
