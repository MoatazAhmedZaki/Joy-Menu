import React, { Component } from "react";
import "../../stylesheets/PaymentMethod.css";
import {  Row, Col,Form, Button } from "react-bootstrap";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import {Datetime} from "react-datetime"

// var DateTime = require('react-datetime');


// import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export default class PaymentMethod extends Component {
    state = {
        // startDate: new Date(),
        years:"",
        days:"",
         months: ["January","February","March","April","May","June","July",
        "August","September","October","November","December"]
      };
    
      // handleChange = date => {
      //   this.setState({
      //     startDate: date
      //   });
      // };



componentWillMount(){

  this.days = function() {
  var days = [];

for(var i=1; i<32;i++){
        days.push(i);
}
    return days
}
 

 



  this.years = function(startYear) {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = currentYear;  

for(var i=0; i<10;i++){
        years.push(startYear++);
}
    return years;
}
 
this.setState({years:this.years(), days:this.days()})
console.log(this.state)

}
      

  render() {
    

    return (
      <Col lg={12} md={12} sm={12} className="PaymentMethod ">
        <h1 className="py-5 px-3 my-order">Payment Method</h1>

        <Row className="   align-items-center px-1 text-center">
          <Col>
            <label>
              <input type="radio" name="test" value="1" />
              <img
        //    width={100}
                className="p-3"
                src={require("../../imgs/mastercard.png")}
                alt="Generic placeholder"
              />
            </label>
          </Col>

          <Col>
            <label>
              <input type="radio" name="test" value="2" />
              <img
           
                className="p-3"
                src={require("../../imgs/visa.png")}
                alt="Generic placeholder"
              />
            </label>
          </Col>

          <Col>
            <label className="">
              <input type="radio" name="test" value="3" />
              <img
           

                className="p-3"
                src={require("../../imgs/paypal.png")}
                alt="Generic placeholder"
              />
            </label>
          </Col>

          <Col>
            <label>
              <input type="radio" name="test" value="4" />
              <img
                className="p-3"
                src={require("../../imgs/ipay.png")}
                alt="Generic placeholder"
              />
            </label>
          </Col>

          <Col>
            <label>
              <input type="radio" name="test" value="4" />
            <p                 className="p-3"
>Cash On Delivery</p>
            </label>
          </Col>
          <Col>
            <label>
              <input type="radio" name="test" value="4" />
            <p                 className="p-3"
>Credit Card On Delivery</p>
            </label>
          </Col>
        </Row>


<Col lg={6} md={6} sm={12} className="px-1">
        <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Card Number</Form.Label>
    <Form.Control type="number" placeholder="55555 5555 5555555 55" />
  </Form.Group>
  </Col>

 {/* <Col className="mb-5"> */}

  {/* <DatePicker
    //   selected={startDate}
    //   onChange={date => setStartDate(date)}
    selected={this.state.startDate}
        onChange={this.handleChange}
      showYearPicker
      dateFormat="yyyy"
      calendarClassName="myrasta-stripes"
      className="red-border"


    />
    </Col> */}
<Col lg={6} md={6} sm={12} className="px-1">
<Row>

<Col xs={5}>

<p>Card Expiry</p>
</Col>



<Col xs={{span:4 ,offset:3}} className="px-1">

<p>CVV card</p>
</Col>


</Row>

</Col>



<Col lg={6} md={6} sm={12}>


<Row>


<Col xs={4}  className="px-1">
<Form.Group controlId="exampleForm.ControlSelect1" >

    <Form.Control as="select"  >

<option hidden>Year</option>
    {this.state.years.map((year) => (
      <option>{year}</option>
           
            ))}


    </Form.Control>

  
  </Form.Group>

</Col>



<Col xs={4} className="px-1"> 
<Form.Group controlId="exampleForm.ControlSelect1" >

    <Form.Control as="select" >
      <option hidden>Month</option>
    {this.state.months.map((month) => (
      <option>{month}</option>
           
            ))}
    </Form.Control>

  
  </Form.Group>

</Col>



<Col xs={4} className="px-1">
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="number" placeholder="1234" />
  </Form.Group>




</Col>
</Row>
</Col>

    {/* <DateTime dateFormat="YYYY" timeFormat={false} /> */}

    {/* <input type="year" id="start" name="start" /> */}


        {/* <select id="year" name="year"/> */}
        {/* <input class="date-own form-control" type="date"/> */}
     



<Button className="w-75 payment-method-btn py-2 my-3" >PAY</Button>


      </Col>
    );
  }
}
