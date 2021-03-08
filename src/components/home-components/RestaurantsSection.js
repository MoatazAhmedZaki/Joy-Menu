import React from "react";
import { Container, Media, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../stylesheets/RestaurantsSection.css";
export default function RestaurantsSection(props) {
  return (
    <section className="RestaurantsSection  py-5">
      <Container>
        <h2 className="text-center">
          <span> All </span> Resturants
        </h2>

        <Col lg={8} md={12} sm={12} className="mx-auto py-5">
          <Row>
            {props.rest.map((number) => (
              <Col lg={6} md={6} sm={12} className="mx-auto my-2 ">
                <Media className="p-3 ">
                 <Link to="/Restaurant/id"> <img
                    width={64}
                    height={64}
                    className="align-self-center mr-3"
                    src={require("../../imgs/rest2.png")}
                    alt="Generic placeholder"
                  /></Link>
                  <Media.Body>
                    <div className="d-flex justify-content-between">
                      {" "}
                      <h5> Resturants Name</h5>{" "}
                      <Button className=" fav-btn">
                        {" "}
                        <i class="fas fa-heart"></i>
                      </Button>
                    </div>

                    <p>
                      <i class="fas fa-map-marker-alt"></i> 2.50 KM
                    </p>
                    <p> Sandwiches</p>

                    <p>
                      <i class="fas fa-truck"></i> Delivery
                    </p>
                  </Media.Body>
                </Media>
              </Col>
            ))}
          </Row>
        </Col>

        <Row>
          <Button className="show-More-btn mx-auto"> MORE</Button>
        </Row>
      </Container>
    </section>
  );
}
