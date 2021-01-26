import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};
export default App;
