import React from "react";
import { Card } from "react-bootstrap";

const CardCarousel = () => {
  return (
    <>
      <Card style={{ width: "9rem", height: "9rem" }}>
        <Card.Img
          variant="top"
          src="https://static.bmdstatic.com/pk/product/medium/5d37bf7d95044.jpg"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "13px" }}>Card Title</Card.Title>
          <Card.Text>Rp. 100.000</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCarousel;
