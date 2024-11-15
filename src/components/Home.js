import React, { useEffect, useState } from "react"; //hook to run fetch data after rendering t manage components
import { useHistory } from "react-router-dom"; //react hook to navigate between routes in single page app

const baseUrl = "https://car-dealership-backend-2.onrender.com";

const Home = () => {
  const [todaysPick, setTodaysPick] = useState(null); // Hld currnt car details fetchd fr backend and functn  to upd value
  const history = useHistory();

  useEffect(() => {
    //fetch data when componet renderd  first time
    fetch(`${baseUrl}/cars`) //http  get request
      .then((response) => response.json()) //convet data to json
      .then((data) => {
        const rangeRover = data.find((car) => car.name === "Range Rover");
        //find and return the first item in array with same value
        if (rangeRover) {
          setTodaysPick(rangeRover); //If found update todaysPick state with the details of Range.
        } else {
          console.log("Range Rover not found in the data.");
        }
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []); //catch any error during processing

  const handleViewCar = () => {
    history.push("/garage"); //add new entry to browser history stack that simulates a link click and updates the url to /garage.
  }; //from useHistory hook

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <strong>
              Welcome to <br></br>KHAMIC'S <br></br> Dealerships{" "}
              {/*addspace between words (jsx syntax)*/}
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

      {todaysPick && ( // check if todaysPick is true(nothin llbe rendered if null)
        <div className="todays-pick">
          <h2>Today's Pick</h2>
          <div className="car-card">
            <img
              src={`${baseUrl}/images/Car${todaysPick.id}.jpg`} // dynamically load car image by using todaysPick.id to create the image URL
              alt={todaysPick.name} //construct url for the image using car id
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
