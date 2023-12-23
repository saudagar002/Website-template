import React from "react";
import "../Style/Hero.css";

import Services from "./Services";
import Contact from "./Contact";
import Map from "./Map";
import Signup from "./Signup";
import Help from "./Help";
//  import Carousal from "./Carousal"



function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          {/* <h2>new arrivals only</h2> */}
          <div className="hand-hand-icon">
            <p>
              {" "}
              Think Dentistry <b> Think us!!!!</b>
            </p>
            {/* <p> Your Smile, Our Passion - Welcome to Exceptional Dental Care!</p> */}
          </div>
        </div>
      </div>

      <Help />
      <Services />
      {/* <Carousal/> */}
  
      <Map />
      <Signup />
      <Contact />
    </>
  );
}

export default Hero;
