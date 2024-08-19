// import React from "react";
import { useParams } from "react-router-dom";
import getData from "../../data/dummyData";
import ServiceDetails from "../ServiceInfo/BookNow";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import ServiceImage from "./images/2.jpg";
import ProductInformation from "./ProducInformation/ProductInformation";
import "./ProductSlideshow.css";

const SingleService = () => {
  const { slug } = useParams();
  const data = getData(slug);
  console.log(data);

  return (
    <div className="services position-relative container">
      <div className="service_images">
        <div className="img">
          <img src={ServiceImage} alt="Service Banner" className="img-fluid w-100" />
        </div>

        <div className="OuerServices row d-flex justify-content-evenly mt-5">
          <div className="ServicesDeatils col-lg-6 col-md-12 mb-4">
            <div className="ProductInformation">
              <img className="img-fluid w-100" src={data.image} alt={data.title} />
            </div>
            <div className="Product_info">
              <ProductInformation />
            </div>
          </div>
          <div className="Service_info col-lg-4 col-md-12 mb-4">
            <ServiceDetails slug={slug} />
            <ServiceInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
