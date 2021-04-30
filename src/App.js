import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import ScreenOne from "./components/main/screenOne/page/ScreenOne";
import Navigation from "./components/shared/navigation/navigation/Navigation";
import ScreenTwo from "./components/main/screenTwo/page/ScreenTwo";

let hist = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Navigation />
        <Switch>
          <Route path="/one" exact>
            <ScreenOne />
          </Route>
          <Route path="/two" exact>
          <ScreenTwo/>
          </Route>
          <Route path="/one" exact>
            <ScreenOne />
          </Route>
          <Redirect to="/one" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
