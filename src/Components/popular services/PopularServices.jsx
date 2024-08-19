import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ElectricalServiceImages from "../Featured Services/images/Electian.jpeg";
import AcServiceImage from "../ourService/images/ac.avif";
import FreazServiceImage from "../ourService/images/freaz.avif";
import "./PopularService.css";

function PopularServices() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const services = [
    {
      title: "এসি সার্ভিস",
      image: AcServiceImage,
      url: "ac",
    },
    {
      title: "ফ্রিজ সার্ভিস",
      image: FreazServiceImage,
      url: "freaz",
    },
    {
      title: "ইলেকট্রিক সার্ভিস",
      image: ElectricalServiceImages,
      url: "electrical",
    },
  ];

  return (
    <div className="OurPopularServices">
      <div className="container-fluid">
        <div className="title">
          <h1>আমাদের জনপ্রিয় সার্ভিসগুলো</h1>
        </div>
        <div className="subTitle">
          <p>
            এখানে আমাদের সেরা সার্ভিসগুলো দেখুন এবং বেছে নিন আপনার প্রয়োজন
            অনুযায়ী।
          </p>
          <hr className="Line" />
        </div>
        <Slider {...settings}>
          {services.map((service, index) => (
            <Link to={`/service/${service.url}`} key={index}>
              <Card className="service-card">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularServices;
