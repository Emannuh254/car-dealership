import React from "react";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No cars in your wishlist.</p>
      ) : (
        wishlist.map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={`https://car-dealership-backend-2.onrender.com${car.image}`}
              alt={car.name}
              className="car-image"
            />
            <h3>{car.name}</h3>
            <p>Model: {car.model || "Unknown"}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            {/* Remove from Wishlist Button */}
            <button
              onClick={() => {
                removeFromWishlist(car.id); // Remove the car from wishlist
                alert("Car has been removed from your wishlist!"); // Show the alert
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
