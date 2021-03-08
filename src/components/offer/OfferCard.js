import React from "react";
import { Card } from "react-bootstrap";

import "../../stylesheets/OfferCard.css"
export default function OfferCard() {
  return (
    <Card className="my-2 OfferCard">
      <Card.Img variant="top" src={require("../../imgs/offer.png")} />

      <Card.Body>
        <Card.Title className="card-title"> Buffalo burger </Card.Title>

        <p>
          <i class="fas fa-map-marker-alt"></i> 2.50 KM
        </p>
      </Card.Body>
    </Card>
  );
}
