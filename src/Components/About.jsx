// About.js
import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <h2>About Our Clinic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            ultricies felis. Curabitur mattis hendrerit turpis, vel tincidunt
            lacus efficitur nec. Proin quis metus non orci rhoncus posuere nec
            sit amet ligula.
          </p>
          <p>
            Mauris nec massa ac purus tincidunt dapibus non eu felis. Vivamus ut
            nisi a justo fermentum consectetur. Nam sit amet nunc vel elit
            malesuada cursus. Quisque interdum tortor eu diam consequat, nec
            luctus orci gravida.
          </p>
          <p>
            Mauris nec massa ac purus tincidunt dapibus non eu felis. Vivamus ut
            nisi a justo fermentum consectetur. Nam sit amet nunc vel elit
            malesuada cursus. Quisque interdum tortor eu diam consequat, nec
            luctus orci gravida.
          </p>
          <p>
            Mauris nec massa ac purus tincidunt dapibus non eu felis. Vivamus ut
            nisi a justo fermentum consectetur. Nam sit amet nunc vel elit
            malesuada cursus. Quisque interdum tortor eu diam consequat, nec
            luctus orci gravida.
          </p>
        </div>

        <div className="col-md-5">
          <img
            src={process.env.PUBLIC_URL + "/21716-pediatrician.jpg"}
            alt="Clinic"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
