import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Availability from "./Product Components/Availability";
import ClientReviews from "./Product Components/ClientReviews";
import Description from "./Product Components/Description";
import "./ProductInformation.css";

const ProductInformation = () => {
  const [currentComponent, setCurrentComponent] = useState("Description");
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (currentComponent) {
      case "Description":
        return <Description />;
      case "ClientReviews":
        return <ClientReviews />;
      case "Availability":
        return <Availability />;
      default:
        return <Description />;
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="button-container mt-4">
        <button
          className={`button ${
            currentComponent === "Description" ? "active" : ""
          }`}
          onClick={() => setCurrentComponent("Description")}
        >
          Description
        </button>
        <button
          className={`button ${
            currentComponent === "ClientReviews" ? "active" : ""
          }`}
          onClick={() => setCurrentComponent("ClientReviews")}
        >
          Client Reviews
        </button>
        <button
          className={`button ${
            currentComponent === "Availability" ? "active" : ""
          }`}
          onClick={() => setCurrentComponent("Availability")}
        >
          Availability
        </button>
        <button className="button go-home-button" onClick={navigateHome}>
          Go Home
        </button>
      </div>
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default ProductInformation;
