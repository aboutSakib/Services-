import React from "react";
import "./ServicePage.css";
import hero_image from "./jkjukl.png";
const ServicePage = () => {
  return (
    <div className="service-container">
      <div className="image-section">
        <img src={hero_image} alt="Service" />
      </div>
      <div className="input-section">
        <h1 className="hero_title">
          {" "}
          <span className="Title_Anneshion"> " অন্বেষণ "</span> সার্ভিসে আপনাকে স্বাগতম!
        </h1>
        <div className="input-group">
          <div className="input-wrapper">
            <i className="fas fa-map-marker-alt icon"></i>
            <input
              type="text"
              placeholder="আপনার লোকেশন দিন"
              className="location-input"
            />
          </div>
          <div className="input-wrapper">
            <i className="fas fa-search icon"></i>
            <input
              type="text"
              placeholder="আপনি কি খুজছেন ?"
              className="find-input"
            />
          </div>
          <button className="search-button">সার্চ করুন</button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
