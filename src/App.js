import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";
import UserContextProvider from "../src/components/contexts/UserContext";
import Explore from "./components/Explore";
import Universities from "./components/Universities";
import Profile from "./components/Profile";

function App(props) {
  return (
    <Router>
      <UserContextProvider>
        <Switch>
          <div className="app">
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/explore" component={Explore} />
            <PrivateRoute exact path="/universities" component={Universities} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </div>
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
