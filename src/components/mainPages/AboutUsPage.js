import React, { useEffect } from "react";
import "../../stylesheets/AboutUsPage.css";
import { Container } from "react-bootstrap";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="AboutUsPage">
      <h1 className="">About Us</h1>
      <Container>
        <h2 className="py-5">Who we are</h2>

        <p>
          We are an online food ordering service that helps customers find
          restaurants in their area, filter by cuisine, browse menus and place
          their orders with an option of online payment or cash on delivery. We
          offer our services through desktops and mobile apps for iPhone,
          Android, iPad and windows.
        </p>
        <p>
          Our main aim is to become and remain the market leader in the MENA
          region by diversifying our services portfolio and providing
          best-in-class customer experience
        </p>
      </Container>
    </div>
  );
}
