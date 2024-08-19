import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./app.css";
import AcServiceImage from "./images/ac.avif";
import ServiceImage from "./images/computerService.webp";
import AirconditionarImage from "./images/freaz.avif";
import Health from "./images/health.webp";

function ProductSlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        },
      },
    ],
  };

  const slides = [
    {
      url: "computerservice",
      image: ServiceImage,
      alt: "কম্পিউটার সার্ভিস",
      text: "কম্পিউটার সার্ভিস",
    },
    {
      url: "acservice",
      image: AcServiceImage,
      alt: "এসি সার্ভিস",
      text: "এসি সার্ভিস",
    },
    {
      url: "airconditionar",
      image: AirconditionarImage,
      alt: "ফ্রিজ সার্ভিস",
      text: "ফ্রিজ সার্ভিস",
    },
    {
      url: "health",
      image: Health,
      alt: "হেলথ অ্যান্ড কেয়ার",
      text: "হেলথ অ্যান্ড কেয়ার",
    },
  ];

  return (
    <div className="carousel-container">
      <h1 className="title">আমাদের সার্ভিস সূমহ</h1>
      <p className="subTitle">
        আমরা গ্রাহকদের সেরা মানের সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের
        অভিজ্ঞ ও প্রশিক্ষিত কর্মীরা আপনার সেবায় নিয়োজিত থাকবে। আমাদের সার্ভিস
        ব্যবহার করে নিশ্চিন্তে থাকতে পারেন।
      </p>
      <hr className="Line" />
      <Slider {...settings} className="productSlide">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <div className="card">
              <Link to={`/service/${slide.url}`}>
                <img
                  className="card-img-top"
                  src={slide.image}
                  alt={slide.alt}
                />
              </Link>
              <div className="card-body">
                <p className="card-text">
                  <br />
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlideShow;
