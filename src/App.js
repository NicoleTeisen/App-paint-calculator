import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Data from "./pages/Data";
import Result from "./pages/Result";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Data} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
