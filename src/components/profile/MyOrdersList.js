import React, { Component } from 'react'
import MyOrdersitem from './MyOrdersitem'
import {Form ,Row ,Col } from 'react-bootstrap'

export default class MyOrdersList extends Component {
    render() {
        return (
            <div>
<Col lg={6} md={6} xs={12} className="pb-4">

<Row>
    <Col xs={6}>

<Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Col>

    <Col xs={6}>

    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>

</Col>
    
</Row>
</Col>
<hr/>


                <MyOrdersitem/>
                <MyOrdersitem/>

                <MyOrdersitem/>

                
            </div>
        )
    }
}
