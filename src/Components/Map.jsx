// Map.js
import React from 'react';
import "../Style/Map.css"

const Map = () => {
  return (
    <div>
      {/* Google Maps Embed */}
      <iframe
        title="My Home Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.39040476796!2d73.8164949!3d18.60150195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8ec9e1e5d37%3A0x9b3fc8f5047dde53!2sKALPATARU%20ESTATE%20PHASE-2%2C%20Kashid%20Park%2C%20Jawakar%20Nagar%2C%20Pimple%20Gurav%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411061!5e0!3m2!1sen!2sin!4v1701067595500!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
