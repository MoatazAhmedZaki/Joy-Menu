import React from "react";
import "../../stylesheets/OffersSection.css";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";

export default function OffersSection(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="OffersSection  py-5">
      <Container>
        <h2 className="text-center pb-5">
          <span> Browse </span> Offers
        </h2>

        <Slider {...settings}>
          {props.rest.map((number) => (
            <Card className="p-2">
              <Card.Img variant="top" src={require("../../imgs/desh.png")} />
              <Card.Body>
                <Card.Title>Buffalo burger</Card.Title>
                <Card.Text>
                  <i class="fas fa-map-marker-alt"></i> 2.50 KM{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
