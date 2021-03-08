import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../../stylesheets/MyAddressesItem.css";
export default class MyAddressesItem extends Component {
  render() {
    return (
      <div className="address-card2 p-3 ">
        <h2 className="address-title py-4">Home</h2>

        <p className="address-body">
          Dubai, Emirates PO. 1518475 +977 151656 5185
        </p>

        <hr />

        <Button variant="my">
          {" "}
          <i class="fas fa-edit"></i>
        </Button>

        <Button variant="my">
          {" "}
          <i class="fas fa-trash"></i>
        </Button>
      </div>
    );
  }
}
