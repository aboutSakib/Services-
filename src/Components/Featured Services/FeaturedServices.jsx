import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./featured.css";
import Constraction from "./images/constraction.avif";
import ElectricalService from "./images/Electian.jpeg";
import LaptopService from "./images/laptop.jpg";
import waterService from "./images/water.webp";

function FeaturedServices() {
  const FeaturedServicesSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    [
      {
        url: "constraction",
        image: Constraction,
        alt: "কনস্ট্রাকশন সার্ভিস ",
        text: "কনস্ট্রাকশন সার্ভিস",
      },
      {
        url: "waterService",
        image: waterService,
        alt: "পানির লাইন সার্ভিস",
        text: "পানির লাইন সার্ভিস",
      },
      {
        url: "electricalService",
        image: ElectricalService,
        alt: "ইলেকট্রিক সার্ভিস ",
        text: "ইলেকট্রিক সার্ভিস",
      },
      {
        url: "laptopService",
        image: LaptopService,
        alt: "ল্যাপটপ সার্ভিস",
        text: "ল্যাপটপ সার্ভিস",
      },
    ],
    [
      {
        image: Constraction,
        alt: "কনস্ট্রাকশন সার্ভিস ",
        text: "কনস্ট্রাকশন সার্ভিস",
      },
      {
        image: waterService,
        alt: "পানির লাইন সার্ভিস",
        text: "পানির লাইন সার্ভিস",
      },
      {
        image: ElectricalService,
        alt: "ইলেকট্রিক সার্ভিস ",
        text: "ইলেকট্রিক সার্ভিস",
      },
      {
        image: LaptopService,
        alt: "ল্যাপটপ সার্ভিস",
        text: "ল্যাপটপ সার্ভিস",
      },
    ],
  ];

  return (
    <div className="FeatureCarouselContainer">
      <h1 className="title">আমাদের পরিষেবা</h1>
      <p className="subTitle">
        আমাদের প্রতিটি পরিষেবা মানসম্মত এবং গ্রাহকের সন্তুষ্টি নিশ্চিত করতে তৈরি
        করা হয়েছে। আমাদের সাথে থাকুন এবং নিশ্চিত থাকুন, আপনার সমস্যাগুলি
        সমাধানের জন্য আমরা সব সময় প্রস্তুত।
      </p>
      <hr className="Line" />
      <Slider {...FeaturedServicesSettings} className="FeatureProductSlide">
        {slides.map((slideSet, index) => (
          <div key={index} className="carousel-inner">
            <div className="carousel-item-row">
              {slideSet.map((slide, index) => (
                <div key={index} className="card">
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
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedServices;
