import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import data from "./pages/data";
import result from "./pages/result";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={data} />
        <Route path="/result" component={result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
