
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import bookNowData from "../../data/dummyData";
import BooknowLogo from "./images/logo2.png";
import "./servicesInfo.css";

const ServiceDetails = ({ slug }) => {
  const data = bookNowData(slug);

  return (
    <div className="service-details p-4 border rounded shadow-sm">
      <img src={BooknowLogo} alt="Service Logo" className="service-logo img-fluid mb-3" />
      <ul className="text-center list-unstyled">
        {data.text.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="check-icon">✔</span> {item}
          </li>
        ))}
      </ul>
      <Link to="/login" className="btn btn-primary btn-block mt-4 w-100">
        Book Now
      </Link>
    </div>
  );
};

export default ServiceDetails;
