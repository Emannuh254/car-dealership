import React, { useEffect, useState } from "react";

const baseUrl = "https://car-dealership-backend-2.onrender.com/cars";

const Garage = ({ addToWishlist }) => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Fetch cars data from the backend API
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched cars:", data); // Log the fetched data
        setCars(data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // Filter cars based on search query
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered cars:", filteredCars); // Log the filtered cars to debug

  return (
    <div className="garage">
      <h1>Garage</h1>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search for a car by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
        className="search-input"
      />
      <div className="car-list">
        {filteredCars.length === 0 ? (
          <p>No cars found matching your search.</p>
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} className="car-card">
              <img
                src={`${baseUrl}${car.image}`}
                alt={car.name}
                className="car-image"
              />
              <h2>{car.name}</h2>
              <p>Name: {car.name}</p>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Price: ${car.price}</p>
              {/* Add to Wishlist Button */}
              <button onClick={() => addToWishlist(car)}>
                Add to Wishlist
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Garage;
