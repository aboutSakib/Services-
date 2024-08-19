
import { Link } from "react-router-dom";
import ServiceLogo from "./images/servicelogo.jpg";
import "./servicesInfo.css";

const ServiceInfo = () => {
  return (
    <div className="service-info p-4 border rounded shadow-sm text-center">
      <img src={ServiceLogo} alt="Service Logo" className="service-logo img-fluid mb-3" />
      <h2>সেবা নিন</h2>
      <p>জানুয়ারী 2024 থেকে সদস্য</p>
      <div className="service-stats mb-3">
        <p>
          অর্ডার সম্পূর্ণ হয়েছেঃ <strong>5</strong>
        </p>
        <p> রেটিং দিনঃ ⭐⭐⭐⭐⭐</p>
      </div>
      <Link to="/contact" className="btn btn-secondary btn-block w-100">
        Contact Here
      </Link>
    </div>
  );
};

export default ServiceInfo;
