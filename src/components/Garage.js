import React, { useEffect, useState } from "react";
const baseUrl = "https://car-dealership-backend-2.onrender.com/cars";

const Garage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return (
    <div className="garage">
      <h1>Garage</h1>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={`${baseUrl}${car.image}`}
              alt={car.name}
              className="car-image"
            />
            <h2>{car.name}</h2>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Garage;
