import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./components/contexts/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";
import UserContextProvider from "../src/components/contexts/UserContext";
import Explore from "./components/Explore";
import Universities from "./components/Universities";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <UserContextProvider>
        <Router>
          <Switch>
            <>
              <Route exact path="/" exact component={Login} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/explore" component={Explore} />
              <PrivateRoute
                exact
                path="/universities"
                component={Universities}
              />
            </>
          </Switch>
        </Router>
      </UserContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
