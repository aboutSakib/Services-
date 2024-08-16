import React from "react";
import ContactForm from "../Contact Services/ContacServices";
import FeaturedServices from "../Featured Services/FeaturedServices";
import ServicePage from "../Hero_section/Hero";
import ProductSlideShow from "../ourService/ProductSlideshow";
import PopularServices from "../popular services/PopularServices";

const HomeRoute = () => {
  return (
    <div>
      <ServicePage />
      <FeaturedServices />
      <ProductSlideShow />
      <PopularServices />
      <ContactForm />
    </div>
  );
};

export default HomeRoute;
