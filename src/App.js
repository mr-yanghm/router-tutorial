import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};
export default App;
