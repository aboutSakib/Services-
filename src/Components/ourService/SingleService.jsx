import React from "react";
import { useParams } from "react-router-dom";
import getData from "../../data/dummyData";
import ServiceImage from "./images/2.gif";
import ProductInformation from "./ProducInformation/ProductInformation";
import "./ProducInformation/ProductInformation.css";

const SingleService = () => {
  const { slug } = useParams();
  const data = getData(slug);
  console.log(data);

  return (
    <div className="service_images">
      <div className="img">
        <img src={ServiceImage} alt="Service Banner" />
      </div>
      <div className="text-center ProductInformation">
        <img src={data.image} alt={data.title} />
        <ProductInformation />
      </div>
    </div>
  );
};

export default SingleService;
