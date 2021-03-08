import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../../stylesheets/MyFollowingItem.css";
export default class MyFollowingItem extends Component {
  render() {
    return (
      <div className="card MyFollowingItem">
        <img
          className="img-fluid p-4"
          src={require("../../imgs/Logo.png")}
          alt="Generic placeholder"
        />

        <Button variant="my " className="m-3">
          Unfollow
        </Button>
      </div>
    );
  }
}
