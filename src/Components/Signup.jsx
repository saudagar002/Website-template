import React, { useState } from "react";
import "../Style/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2><u>Sign Up to Receive Smile Tips </u></h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="signup-input"
            />
            <button type="submit" className="signup-button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;      
