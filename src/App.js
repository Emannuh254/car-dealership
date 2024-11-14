import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Garage from "./components/Garage";
import About from "./components/About";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist";

const App = () => {
  const [cars, setCars] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Fetch cars data from the API
  useEffect(() => {
    fetch("https://car-dealership-backend-2.onrender.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // Add a car to the wishlist
  const addToWishlist = (car) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, car];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  // Remove a car from the wishlist
  const removeFromWishlist = (carId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((car) => car.id !== carId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home cars={cars} addToWishlist={addToWishlist} />}
          />
          <Route
            path="/garage"
            render={() => <Garage cars={cars} addToWishlist={addToWishlist} />}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/wishlist"
            render={() => (
              <Wishlist
                wishlist={wishlist}
                removeFromWishlist={removeFromWishlist} // Pass remove function here
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
