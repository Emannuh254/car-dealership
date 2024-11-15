import React, { useEffect, useState } from "react";

const baseUrl = "https://car-dealership-backend-2.onrender.com/cars";

const Garage = ({ addToWishlist }) => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // state for search query

  // fetch cars data from  backend
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched cars:", data); // log fetched data
        setCars(data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // filter carz on search query
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); //const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()));

  console.log("Filtered cars:", filteredCars); // debug

  return (
    <div className="garage">
      <h1>Garage</h1>

      {/* search input field */}
      <input
        type="text"
        placeholder="Search for a car by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // update search query on change
        className="search-input" //setSearchQuery function called, to update searchQuery state wit new value (re-render of the component with the updated value.
      />
      <div className="car-list">
        {filteredCars.length === 0 ? ( //ternary operator(check if filteredCars has any results)
          <p>No cars found matching your search.</p>
        ) : (
          filteredCars.map(
            (
              car //maps through filteredCars array,en show each car's details (image, name, model, year, price
            ) => (
              <div key={car.id} className="car-card">
                <img
                  src={`https://car-dealership-backend-2.onrender.com/images/Car${car.id}.jpg`} //i had to render each car image using it Id
                  alt={car.name}
                  className="car-image"
                />

                <h2>{car.name}</h2>
                <p>Name: {car.name}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Price: ${car.price}</p>
                {/* add to wishlst buttn */}
                <button
                  onClick={() => {
                    addToWishlist(car); // add car to
                    alert(`${car.name} has been added to your wishlist!`); // Show alert
                  }}
                >
                  Add to Wishlist
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Garage;
