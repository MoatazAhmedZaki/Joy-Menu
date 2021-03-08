import React, { useEffect } from "react";
import "../../stylesheets/PrivacyPolicy.css";
import { Container } from "react-bootstrap";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="PrivacyPolicy py-5">
      <Container>
        <h2 className="p-4">privacy policy</h2>

        <div className="parg-holder p-5">
          <p>
            joy menu .may collect the following information from users of our
            site: first name, last name, street address, area and city, phone
            and contact numbers, e-mail address, GPS location (mobile site)
            (collectively, "Personally Identifiable Information" or "PII").
          </p>
          <p>
            In addition, Talabat may collect information regarding Talabat
            account holders' past Talabat orders, favorite restaurants, customer
            service inquiries, service/restaurant reviews and certain social
            networking preferences (e.g. pages you "Like" or "Recommend").
          </p>
          <p>
            Joy Menu also uses web analytics software to track and analyze
            traffic on the site in connection with Talabat advertising and
            promotion of Joy Menu services.
          </p>
          <p>
            Joy Menu may publish these statistics or share them with third
            parties without including PII.
          </p>
          <p>
            Non-Personally Identifiable Information (or "Non-PII") is aggregated
            information, demographic information and any other information that
            does not reveal your specific identity. We and our third party
            service providers may collect Non-PII from you, including your MAC
            address, your computer type, screen resolution, OS version, Internet
            browser and demographic data, for example your location, gender and
            date of birth and we may aggregate PII in a manner such that the
            end-product does not personally identify you or any other user of
            the Site, for example, by using PII to calculate the percentage of
            our users who have a particular telephone area code. We and our
            third party service providers may also use cookies, pixel tags, web
            beacons, and other similar technologies to better serve you with
            more tailored information and facilitate your ongoing use of our
            Site. If you do not want information collected through the use of
            cookies, there is a simple procedure in most browsers that allows
            you to decline the use of cookies. To learn more about cookies,
            please visit http://www.allaboutcookies.org/.
          </p>
          <p>
            IP Addresses are the Internet Protocol addresses of the computers
            that you are using. Your IP Address is automatically assigned to the
            computer that you are using by your Internet Service Provider (ISP).
            This number is identified and logged automatically in our server log
            files whenever users visit the Site, along with the time(s) of such
            visit(s) and the page(s) that were visited. Collecting IP Addresses
            is standard practice on the Internet and is done automatically by
            many websites.
          </p>
        </div>
      </Container>
    </div>
  );
}
