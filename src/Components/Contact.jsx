import React, { useState } from "react";
import Map from "./Map";
import "../Style/Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [agreeToConditions, setAgreeToConditions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (agreeToConditions) {
      console.log("Form submitted with details:", {
        firstName,
        lastName,
        contactNumber,
        email,
        appointmentDate,
        appointmentTime,
      });
    } else {
      console.log("Please agree to the conditions before submitting.");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p>
          Welcome to our contact page. Feel free to reach out to us with any
          inquiries or messages.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime">Appointment Time:</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={agreeToConditions}
                onChange={() => setAgreeToConditions(!agreeToConditions)}
                required
              />
              I agree to the conditions
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
