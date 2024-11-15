import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Garage from "./components/Garage";
import About from "./components/About";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
//wraps the entire application to enable routing
//specifies what component to render for a given URL path.
// ensures only one route is matched and rendered at a time

const App = () => {
  const [cars, setCars] = useState([]); //store list of cars fetched(empy array initially)
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  //get data from localStorage to wishlist data between sessions.
  useEffect(() => {
    fetch("https://car-dealership-backend-2.onrender.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const addToWishlist = (car) => {
    setWishlist((prevWishlist) => {
      // useState hook to updat state variable wishlist
      const updatedWishlist = [...prevWishlist, car]; //list of carz in the wishlist before new car
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist; //update based on the latest state value and return newState
    });
  };

  const removeFromWishlist = (carId) => {
    //unique identifier for the car to be removed
    setWishlist((prevWishlist) => {
      //update wishlist state using a callback function.
      const updatedWishlist = prevWishlist.filter((car) => car.id !== carId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };
  //create new array only with car not mtching carId
  return (
    <Router>
      <Navbar /> {/*/ visible across all routes*/}
      <div className="app">
        <Switch>
          {" "}
          {/* only one root renderd at a time */}
          <Route
            exact
            path="/"
            render={() => <Home cars={cars} addToWishlist={addToWishlist} />}
          />{" "}
          {/* Passes props C&ATWST to the <Home> component dynamically*/}
          <Route
            path="/garage"
            render={() => <Garage cars={cars} addToWishlist={addToWishlist} />}
          />
          <Route path="/about" component={About} />{" "}
          {/* component prop since no additional props need to be passed*/}
          <Route path="/contact" component={Contact} />
          <Route
            path="/wishlist"
            render={() => (
              <Wishlist
                wishlist={wishlist}
                removeFromWishlist={removeFromWishlist}
              />
            )}
          />{" "}
          {/*use (render) to pass a function that returns the component*/}
        </Switch>
      </div>
      <Footer /> {/* PASSED AT BOTTOM OF EVRY PAGE NOT REGARDING ROUTES*/}
    </Router>
  );
};

export default App;
