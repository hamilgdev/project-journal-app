import {
  auth,
  signOut,
  updateProfile,
  signInWithPopup,
  googleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../firebase/fireBaseConfig";

import { SET_AUTH_LOGIN, SET_AUTH_LOGOUT } from "../types/authType";
import { logoutCleanNote } from "./notesAction";
import { finishLoading, startLoading } from "./uiAction";

/**
 * dispatchers()
 */

export const startWithEmailAndPassLogin = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setLogin(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        dispatch(finishLoading());
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(setLogin(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };
};

export const startWithUserRegister = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        console.log(user);
        dispatch(setLogin(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };
};

export const endSingLogout = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful!");
        dispatch(setLogout());
        dispatch(logoutCleanNote());
      })
      .catch(console.warn);
  };
};

/**
 * Actions creators
 */

export const setLogin = (uid, displayName) => {
  return {
    type: SET_AUTH_LOGIN,
    payload: { uid, displayName },
  };
};

export const setLogout = () => {
  return {
    type: SET_AUTH_LOGOUT,
  };
};
