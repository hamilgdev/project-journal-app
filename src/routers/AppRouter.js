import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" exact component={JournalScreen} />

          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
};
// px-4 xl:px-0 | lg:max-w-screen-lg xl:max-w-screen-xl | my-0 mx-auto
export default AppRouter;
