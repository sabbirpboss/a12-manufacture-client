import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import summary1 from "../../Images/summary1.png";
import summary2 from "../../Images/summary2.png";
import summary3 from "../../Images/summary3.png";

const BusinessSummary = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Business Summary</h2>
        <h1 className="text-success">
          We have the best quality industrial products.
        </h1>
      </div>
      <CardGroup>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            className="w-25 h-25 mx-auto mt-5"
            src={summary1}
          />
          <Card.Body>
            <Card.Title>
              <h1>83+</h1>
            </Card.Title>
            <Card.Text>
              <h5 className="text-success">Countries</h5>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            className="w-25 h-25 mx-auto mt-5"
            src={summary2}
          />
          <Card.Body>
            <Card.Title>
              <h1>500+</h1>
            </Card.Title>
            <Card.Text>
              <h5 className="text-success">Complete Projects</h5>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            className="w-25 h-25 mx-auto mt-5"
            src={summary3}
          />
          <Card.Body>
            <Card.Title>
                <h1>300+</h1>
            </Card.Title>
            <Card.Text>
            <h5 className="text-success">Happy Clients</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default BusinessSummary;
