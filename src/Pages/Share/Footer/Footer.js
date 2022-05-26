import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="container">
        <div className="row p-5">
          <div className="col-md-3">
            <Link className="" to="">
              {" "}
              <img src="" alt="" />
            </Link>
            <p className="text-white mt-3">
              The BD's tehnology trade association Championing technology's role
              in preparing and empowering the UK for what comes next, delivering
              a better future for people, society.
            </p>
            <div>
              <Link className="linkIcon" to="">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link className="linkIcon mx-3" to="">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className="linkIcon" to="">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link className="linkIcon mx-3" to="">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <h4>Company</h4>
            <Link className="link" to="/home">
              Home
            </Link>
            <Link className="link" to="/">
              About
            </Link>
            <Link className="link" to="/">
              Pricing
            </Link>
            <Link className="link" to="/">
              Products
            </Link>
            <Link className="link" to="/">
              Delivery Point
            </Link>
          </div>
          <div className="col-md-3 p-3">
            <h4>Services</h4>
            <Link className="link" to="/">
              Products
            </Link>
            <Link className="link" to="/">
              Media
            </Link>
            <Link className="link" to="/">
              Online Shop
            </Link>
            <Link className="link" to="/">
              Customar Care
            </Link>
          </div>
          <div className="col-md-3 p-3">
            <h4>Quick Links</h4>
            <Link className="link" to="/">
              Products
            </Link>
            <Link className="link" to="/">
              Latest News
            </Link>
            <Link className="link" to="/">
              Case Studies
            </Link>
            <Link className="link" to="/">
              Where We Are
            </Link>
            <Link className="link" to="/">
              Recent Queries
            </Link>
          </div>
        </div>
        <hr />
        <h6 className="text-center p-3 m-0 ">
          © 2025 || All rights & Privacy Policy reserved by patrai
        </h6>
      </div>
    </section>
  );
};

export default Footer;
