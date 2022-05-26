import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Images/banner.jpg";
import "./Header.css";

const Header = () => {
  return (
    <main className="container">
      <div className="row p-3">
        <div className="col-md-6 text-light d-flex justify-content-center align-items-center">
          <div>
            <h1 className="fw-bolder">The BD's tehnology trade association</h1>
            <h1>
              Championing technology's role in preparing and empowering the Bd.
            </h1>
            <p className="m-0  mt-1"></p>
            <Link to="/services">
              <button className="brandBtn mt-5 me-3 text-uppercase">Our Services</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6  d-flex justify-content-center align-items-center p-3  headerImageDiv">
          <div>
            <img className="img-fluid rounded-3" src={banner} alt="tools" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
