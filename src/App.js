import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";
import About from "./components/About";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/garage" component={Garage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/wishlist" component={Wishlist} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
