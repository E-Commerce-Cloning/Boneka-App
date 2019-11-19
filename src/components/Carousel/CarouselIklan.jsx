import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bmdstatic.com/st/home/2ddf1c-Main Banner 1.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bmdstatic.com/st/home/7f705d-main-banner 2.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bmdstatic.com/st/home/027165-mb3.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bmdstatic.com/st/home/693414-Main-Banner 4.jpg"
          alt="Third slid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bmdstatic.com/st/home/f66833-main banner 5.jpg"
          alt="Third slid"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
