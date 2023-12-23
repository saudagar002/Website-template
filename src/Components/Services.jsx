// SingleServicePage.js
import React from "react";

const SingleServicePage = () => {
  const services = [
    {
      title: "Service 1",
      content:
        "Hospital services encompass a wide range of essential healthcare offerings, from emergency care and diagnostics to surgeries and rehabilitation. These vital services aim to promote health, treat illnesses, and enhance overall well-being. In a hospital setting, dedicated medical professionals collaborate to provide comprehensive and compassionate care, ensuring patients receive the necessary attention and expertise for their diverse healthcare needs.",
      imagePath: "/services-1.jpg",
    },
    {
      title: "Service 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit..Hospital services encompass a wide range of essential healthcare offerings, from emergency care and diagnostics to surgeries and rehabilitation. These vital services aim to promote health, treat illnesses, and enhance overall well-being. In a hospital setting, dedicated medical professionals collaborate to provide comprehensive and compassionate care, ensuring patients receive the necessary attention and expertise for their diverse healthcare needs..",
      imagePath: "/services-2.jpg",
    },
    {
      title: "Service 3",
      content:
        "Hospital services encompass a wide range of essential healthcare offerings, from emergency care and diagnostics to surgeries and rehabilitation. These vital services aim to promote health, treat illnesses, and enhance overall well-being. In a hospital setting, dedicated medical professionals collaborate to provide comprehensive and compassionate care, ensuring patients receive the necessary attention and expertise for their diverse healthcare needs.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imagePath: "/services-3.jpg",
    },
    {
      title: "Service 4",
      content:
        "Hospital services encompass a wide range of essential healthcare offerings, from emergency care and diagnostics to surgeries and rehabilitation. These vital services aim to promote health, treat illnesses, and enhance overall well-being. In a hospital setting, dedicated medical professionals collaborate to provide comprehensive and compassionate care, ensuring patients receive the necessary attention and expertise for their diverse healthcare needs.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imagePath: "/services-4.jpg",
    },
    {
      title: "Service 5",
      content:
        "Lorem ipsum dolor sit amet,Hospital services encompass a wide range of essential healthcare offerings, from emergency care and diagnostics to surgeries and rehabilitation. These vital services aim to promote health, treat illnesses, and enhance overall well-being. In a hospital setting, dedicated medical professionals collaborate to provide comprehensive and compassionate care, ensuring patients receive the necessary attention and expertise for their diverse healthcare needs. consectetur adipiscing elit...",
      imagePath: "/services-5.jpg",
    },
    {
      title: "Service 6",
      content:
        "Lorem ipsum dolor siHospital services encompass a wide range of essential healthcare offerings, from emergency care and diagnostics to surgeries and rehabilitation. These vital services aim to promote health, treat illnesses, and enhance overall well-being. In a hospital setting, dedicated medical professionals collaborate to provide comprehensive and compassionate care, ensuring patients receive the necessary attention and expertise for their diverse healthcare needs.t amet, consectetur adipiscing elit...",
      imagePath: "/services-6.jpg",
    },
  ];

  const renderService = (service) => (
    <div className="col-md-6 text-center mt-5" key={service.title}>
      <img
        src={process.env.PUBLIC_URL + service.imagePath}
        alt="Service"
        className="img-fluid mb-4"
      />
      <h2>{service.title}</h2>
      <p>{service.content}</p>
    </div>
  );

  const renderServiceRow = (startIdx, endIdx) => (
    <div className="row">
      {services.slice(startIdx, endIdx).map(renderService)}
    </div>
  );

  return (
    <div className="container mt-5">
      <h1 style={{ color: "BLACK" }}>ABOUT OUR SERVICES</h1>
      {renderServiceRow(0, 2)}
      {renderServiceRow(2, 4)}
      {renderServiceRow(4, 6)}
    </div>
  );
};

export default SingleServicePage;
