import React, { Component } from "react";
import { Form,  Col, Button } from "react-bootstrap";
import MyNotificationsItem from "./MyNotificationsItem";

export default class MyNotificationsList extends Component {
  render() {
    return (
      <div>
        <div className=" d-flex justify-content-between">
          <Col xs={4}>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>

          <Col xs={6} className=" text-center">
            <Button variant="my">
              {" "}
              <i class="fas fa-trash"></i> Trash All
            </Button>
          </Col>
        </div>
        <hr />

        <MyNotificationsItem />
        <MyNotificationsItem />

        <MyNotificationsItem />

        {/* <MyOrdersitem/>
                            <MyOrdersitem/>
            
                            <MyOrdersitem/> */}
      </div>
    );
  }
}
