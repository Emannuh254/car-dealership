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
              src={`https://car-dealership-backend-2.onrender.com/images/Car${car.id}.jpg`} // Using car ID to generate the image URL
              alt={car.name}
              className="car-image"
            />
            <h3>{car.name}</h3>
            <p>Model: {car.model || "Unknown"}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            <button
              onClick={() => {
                removeFromWishlist(car.id); // Remove the car from wishlist
                alert(`${car.name} has been removed from your wishlist!`); // Alert the user
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
