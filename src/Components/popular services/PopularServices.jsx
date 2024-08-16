import React from "react";
import Card from "react-bootstrap/Card";
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
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

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
          <Card className="service-card">
            <Card.Img variant="top" src={AcServiceImage} />
            <Card.Body>
              <Card.Title>এসি সার্ভিস</Card.Title>
            </Card.Body>
          </Card>
          <Card className="service-card">
            <Card.Img variant="top" src={FreazServiceImage} />
            <Card.Body>
              <Card.Title> ফ্রিজ সার্ভিস</Card.Title>
            </Card.Body>
          </Card>
          <Card className="service-card">
            <Card.Img variant="top" src={ElectricalServiceImages} />
            <Card.Body>
              <Card.Title>ইলেকট্রিক সার্ভিস</Card.Title>
            </Card.Body>
          </Card>
        </Slider>
      </div>
    </div>
  );
}

export default PopularServices;
