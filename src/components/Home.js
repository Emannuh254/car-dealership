import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // For React Router v5

const baseUrl = "https://car-dealership-backend-2.onrender.com/cars";

const Home = () => {
  const [todaysPick, setTodaysPick] = useState(null);
  const history = useHistory(); // Using history for navigation

  // Fetch cars data from the backend API
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        // Find the Range Rover from the data (based on the name)
        const rangeRover = data.find((car) => car.name === "Range Rover");

        if (rangeRover) {
          setTodaysPick(rangeRover); // Set Range Rover as today's pick
        } else {
          console.log("Range Rover not found in the data.");
        }
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // Handle "View Car" button click to navigate to the Garage
  const handleViewCar = () => {
    history.push("/garage"); // Navigate to the Garage page
  };

  return (
    <div className="home">
      <h1>Welcome to the Car Dealership</h1>

      {/* Today's Pick Section */}
      {todaysPick && (
        <div className="todays-pick">
          <h2>Today's Pick</h2>
          <div className="car-card">
            <img
              src={`${baseUrl}${todaysPick.image}`} // Image URL
              alt={todaysPick.name}
              className="car-image"
            />
            <h3>{todaysPick.name}</h3>
            <p>Model: {todaysPick.model || "Unknown"}</p>{" "}
            {/* Fallback if model is missing */}
            <p>Year: {todaysPick.year}</p>
            <p>Price: ${todaysPick.price}</p>
            {/* "View Car" Button */}
            <button onClick={handleViewCar}>View Car</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
