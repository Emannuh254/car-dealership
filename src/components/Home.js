import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const baseUrl = "https://car-dealership-backend-2.onrender.com";

const Home = () => {
  const [todaysPick, setTodaysPick] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`${baseUrl}/cars`)
      .then((response) => response.json())
      .then((data) => {
        const rangeRover = data.find((car) => car.name === "Range Rover");

        if (rangeRover) {
          setTodaysPick(rangeRover);
        } else {
          console.log("Range Rover not found in the data.");
        }
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleViewCar = () => {
    history.push("/garage");
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <strong>
              Welcome to <br></br>KHAMIC'S <br></br> Dealerships{" "}
            </strong>
          </h1>
          <p>
            Lean and meaner than ever, the Range Rover boldly goes where no car
            has gone before.
          </p>
        </div>
        <img
          src="/images/Pic1.png"
          alt="Decorative Pic1"
          className="static-pic second"
        />
        <div className="diagonal-line"></div>
      </div>

      {todaysPick && (
        <div className="todays-pick">
          <h2>Today's Pick</h2>
          <div className="car-card">
            <img
              src={`${baseUrl}/images/Car${todaysPick.id}.jpg`}
              alt={todaysPick.name}
              className="car-image"
            />
            <h3>{todaysPick.name}</h3>
            <p>Model: {todaysPick.model || "Unknown"}</p>
            <p>Year: {todaysPick.year}</p>
            <p>Price: ${todaysPick.price}</p>
            <button onClick={handleViewCar}>View Car</button>
          </div>
        </div>
      )}

      {/* features part */}
      <div className="features-section">
        <h2>Take a journey, beyond space</h2>
        <p>
          The Range Rover can't help but steal the spotlight. With its sharp,
          angular lines and exotic, glass-covered engine, it has a wide and
          commanding presence that makes it impossible to look anywhere else.
        </p>
        <div className="feature-icons">
          <div className="feature">
            <h3>Agility</h3>
            <p>Blistering speed, with a 3.2L V10 engine</p>
          </div>
          <div className="feature">
            <h3>Performance</h3>
            <p>Accelerates from zero to sixty in just 3.2 seconds</p>
          </div>
          <div className="feature">
            <h3>Cutting Edge</h3>
            <p>Intelligent multi-link gears with the R8 LMS racer</p>
          </div>
        </div>
      </div>

      <div className="tech-specs">
        <h2>Lamborghini</h2>
        <h2>Coming soon</h2>
        <ul>
          <li>
            <strong>Tech Specs</strong>
          </li>
          <li>Engine displacement: 5204 cc</li>
          <li>Maximum power: 601.4 bhp @ 8250 rpm</li>
          <li>Drive type: AWD</li>
          <li>Fuel supply: Direct injection</li>
        </ul>
      </div>

      <img
        src="/images/Pic.png"
        alt="Decorative Pic"
        className="static-pic first"
      />
    </div>
  );
};

export default Home;
