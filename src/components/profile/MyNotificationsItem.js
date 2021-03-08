import React, { Component } from "react";
import { Row, Col} from "react-bootstrap";
import "../../stylesheets/MyNotificationsItem.css";
export default class MyNotificationsItem extends Component {
  render() {
    return (
      <div className=" MyNotificationsItem">
        {/* <div className=""> */}
        {/* <div className=" d-flex justify-content-between w-100 ">
                <div className="w-75">
                  <h2>
                  Order NO. #111628 is shipped                  </h2> */}
        {/* <p>Your order on your way to you</p>
                </div>
    
                <div className=" text-center w-25 ">
                  <p className=" my-2  mx-auto ">                    <i class="fas fa-clock"></i> <span> 1/7/2020</span>
</p>
                </div> */}

        <Row>
          <Col lg={8} md={8} xs={12} className="pt-2">
            {" "}
            <h2>Order NO. #111628 is shipped </h2>{" "}
            <p>Your order on your way to you</p>
          </Col>

          <Col lg={4} md={4} xs={12}>
            {" "}
            <p className=" pt-2">
              {" "}
              <i class="fas fa-clock"></i> <span> 1/7/2020</span>
            </p>
          </Col>
        </Row>
        {/* 
              </div>
            </div> */}
        <hr />
      </div>
    );
  }
}
