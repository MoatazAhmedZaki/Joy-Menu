import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../stylesheets/RestaurantCard.css";

export default function RestaurantCard() {
  return (
    <Link to="/Restaurant/id"><Card className="my-3 RestaurantCard px-2">
      <Card.Img variant="top" src={require("../../imgs/rest2.png")} />

      <Card.Body className=" p-2 ">
        <Card.Title className="text-center card-title ">
        Omar Basa
        </Card.Title>
      </Card.Body>
    </Card></Link>
  );
}
