import {
  SET_ACTIVE_NOTE,
  SET_DELETE_NOTE,
  SET_LOAD_NOTE,
  SET_LOGOUT_CLEANING_NOTE,
  SET_NEW_NOTE,
  SET_UPDATED_NOTE,
} from "../types/notesType";

const initialState = {
  notes: [],
  active: null,
};

/**
 * Reducer
 */

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case SET_ACTIVE_NOTE:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case SET_LOAD_NOTE:
      return {
        ...state,
        notes: [...action.payload],
      };
    case SET_UPDATED_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case SET_DELETE_NOTE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case SET_LOGOUT_CLEANING_NOTE:
      return {
        ...state,
        notes: [],
        active: null,
      };
    default:
      return state;
  }
};
