import React from "react";
import { Card, Button } from "react-bootstrap";

import "../../stylesheets/MenuItem.css";
export default function MenuItem() {
  return (
    <Card className="my-2 MenuItem">
      <Card.Img
        variant="top"
        src={require("../../imgs/offer.png")}
        className=" rounded"
      />

      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="card-title"> Buffalo burger </Card.Title>
          <Button className="add-btn" varian="my">
            <i class="fas fa-plus-circle"></i>
          </Button>
        </div>

        <p>
          42.00 <span>AUD </span>{" "}
        </p>

        {/* <Button className="add-btn">
          <i class="fas fa-plus-circle"></i>
        </Button> */}
      </Card.Body>
    </Card>
  );
}
