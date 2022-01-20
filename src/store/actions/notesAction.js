import {
  db,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
} from "../../firebase/fireBaseConfig";
import { getLoadNotes } from "../../helpers/getLoadNotes";
import { setFileUpload } from "../../helpers/setFileUpload";

import {
  SET_ACTIVE_NOTE,
  SET_DELETE_NOTE,
  SET_LOAD_NOTE,
  SET_LOGOUT_CLEANING_NOTE,
  SET_NEW_NOTE,
  SET_UPDATED_NOTE,
} from "../types/notesType";

/**
 * dispatchers()
 */

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // get the state from here
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    // add a new collection in firestore
    const docRef = await addDoc(
      collection(db, `${uid}/journal/notes`),
      newNote
    );

    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const startLoadNote = (uid) => {
  return async (dispatch) => {
    const notes = await getLoadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    // get the state from here
    const { uid } = getState().auth;

    const docRef = doc(db, `${uid}/journal/notes/${note.id}`);

    // if value urlImage = undefined, delete
    if (!note.urlImage) delete note.urlImage;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    // To update note in firestore
    await updateDoc(docRef, noteToFirestore);

    // To update note in store redux
    dispatch(updateNote(note.id, noteToFirestore));
    console.log("saved");
  };
};

export const startUploadingPicture = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    const fileUrl = await setFileUpload(file);
    activeNote.urlImage = fileUrl;

    console.log("uploading...");
    dispatch(startSaveNote(activeNote));
    console.log("upload");
  };
};

export const startDeleteNote = (id) => {
  return async (dispatch, getState) => {
    // get the state from here
    const { uid } = getState().auth;
    console.log("uploading...");
    const docRef = doc(db, `${uid}/journal/notes/${id}`);
    await deleteDoc(docRef);

    dispatch(deleteNote(id));
    console.log("deleted");
  };
};

/**
 * Actions creators
 */

export const addNewNote = (id, note) => {
  return {
    type: SET_NEW_NOTE,
    payload: {
      id,
      ...note,
    },
  };
};

export const activeNote = (id, note) => {
  return {
    type: SET_ACTIVE_NOTE,
    payload: {
      id,
      ...note,
    },
  };
};

export const setNotes = (notes) => {
  return {
    type: SET_LOAD_NOTE,
    payload: notes,
  };
};

export const updateNote = (id, note) => {
  return {
    type: SET_UPDATED_NOTE,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};

export const deleteNote = (id) => {
  return {
    type: SET_DELETE_NOTE,
    payload: id,
  };
};

export const logoutCleanNote = () => {
  return {
    type: SET_LOGOUT_CLEANING_NOTE,
  };
};
