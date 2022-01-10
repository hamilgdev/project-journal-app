import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <div className="flex justify-center items-center min-h-screen | bg-purple-600">
      <div className="p-4 | bg-white shadow-lg rounded-sm">
        <Switch>
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/register" component={RegisterScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
