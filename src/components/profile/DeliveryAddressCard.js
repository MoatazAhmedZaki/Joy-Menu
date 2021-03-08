import React, { Component } from "react";
import "../../stylesheets/DeliveryAddressCard.css";

export default class DeliveryAddressCard extends Component {
  // componentDidMount()  {
  //   var elements = document.getElementsByClassName("address-card");
  //   for (var i = 0, len = elements.length; i < len; i++) {
  // elements[i].classList.remove("acitve");

  // elements[i].addEventListener("click", function () {
  //  this.style.backgroundColor = 'yellow'
  // elements[i].classList.remove("acitve");
  // this.classList.add("acitve");

  //  this.style.backgroundColor = 'yellow'
  // console.log("fire")

  // });

  //       elements[i].onclick(function () {
  //               //  this.style.backgroundColor = 'yellow'

  //               //  this.style.backgroundColor = 'yellow'
  // console.log("fire")

  //             });
  // }

  // e.target.classList.add("acitve");
  // };

  // componentDidMount(){

  //   $(function () {
  //     $(".address-card").click(function () {
  //         $(this).css('background-color', '#000000');
  //     });
  // });

  // }

  render() {
    return (
      <div className="del-addresses ">
        <label>
          <input type="radio" name="test" value="1" />

          <div className="address-card p-3 ">
            <h2 className="address-title py-4">Home</h2>

            <p className="address-body">
              Dubai, Emirates PO. 1518475 +977 151656 5185
            </p>
          </div>
        </label>
      </div>
    );
  }
}
