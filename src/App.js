import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./Components/Contact Services/ContacServices";
import FeaturedServices from "./Components/Featured Services/FeaturedServices";
import ServicePage from "./Components/Hero_section/Hero";
import HomeRoute from "./Components/Home Pages/HomeRoute";
import ProductSlideShow from "./Components/ourService/ProductSlideshow";
import SingleService from "./Components/ourService/SingleService";
import PopularServices from "./Components/popular services/PopularServices";
import ProductInformation from "./Components/ProducInformation/ProductInformation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/service/:slug" element={<SingleService />} />
        <Route path="/" element={<HomeRoute />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/productslideShow" element={<ProductSlideShow />} />
        <Route path="/featuredservices" element={<FeaturedServices />} />
        <Route path="/popularservices" element={<PopularServices />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/service" element={<ProductInformation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
