import React from "react";
import "./About.css";

const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>

      <p className="page-text">
        We'd love to hear from you! If you have feedback, feature requests, or 
        encounter any issues while using Movie Explorer, feel free to reach out.
      </p>

      <div className="contact-box">
        <p><strong>Email:</strong> support@movieexplorer.com</p>
        <p><strong>Instagram:</strong> @movieexplorer</p>
        <p><strong>GitHub:</strong> github.com/movieexplorer</p>
        <p><strong>Developer:</strong> MONISH </p>
      </div>

      <p className="page-text">We typically respond within 24 hours.</p>
    </div>
  );
};

export default Contact;
