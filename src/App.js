import React from "react";
import "antd/dist/antd.css";
import MainHead from "./Components/HeaderFolder/MainHead";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quotable from "./Components/HeaderFolder/Quotable";
import Statemgt from "./Components/HeaderFolder/Statemgt";
import Countable from "./Components/HeaderFolder/Countable";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainHead} />
          <Route exact path="/quotables" component={Quotable} />
          <Route exact path="/state" component={Statemgt} />
          <Route exact path="/count" component={Countable} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
