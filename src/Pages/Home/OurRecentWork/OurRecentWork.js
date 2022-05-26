import React from "react";
import "./OurRecentWork.css";
import recent from "../../Images/banner.jpg";

const OurRecentWork = () => {
  return (
    <section className="mt-5 recent-container">
      <div className="text-center text-light pt-5">
        <h1>Recent Success</h1>
      </div>
      <div className="row">
        <div className="col-md-6 p-3">
          <div>
              <img className="img-fluid p-3 rounded" src={recent} alt="success" />
          </div>
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center text-light align-items-center">
          <div className="recentWorkDescription p-3">
            <h2 className="fs-1 mb-4">Tehnology trade association</h2>
            <p className="fs-5">
              The BD's tehnology trade association Championing technology's role
              in preparing and empowering the UK for what comes next, delivering
              a better future for people, society. The BD's tehnology trade
              association Championing technology's role in preparing and
              empowering the UK for what comes next, delivering a better future
              for people, society. The BD's tehnology trade association
              Championing technology's role in preparing and empowering the UK
              for what comes, delivering a better future for people,
              society.
            </p>
            <button className="brandBtn mt-5 me-3 text-uppercase">Learn more...</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRecentWork;
