import React from "react";
import { Card } from "react-bootstrap";

const CardCarousel = () => {
  return (
    <>
      <div>
        <Card style={{ width: "8rem", height: "6rem" }}>
          <Card.Img
            variant="top"
            src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
            <br />
            <Card.Text style={{ fontSize: "15px", font: "solid" }}>
              Rp. 100.000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "8rem", height: "6rem" }}>
          <Card.Img
            variant="top"
            src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
            <br />
            <Card.Text style={{ fontSize: "15px", font: "solid" }}>
              Rp. 100.000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "8rem", height: "6rem" }}>
          <Card.Img
            variant="top"
            src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
            <br />
            <Card.Text style={{ fontSize: "15px", font: "solid" }}>
              Rp. 100.000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardCarousel;
