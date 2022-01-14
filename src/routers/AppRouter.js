import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChanged, auth } from "../firebase/fireBaseConfig";
import { setLogin } from "../store/actions/authAction";

import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import LoadingScreen from "../components/ui/LoadingScreen";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Obtén el usuario con sesión activa
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(setLogin(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
