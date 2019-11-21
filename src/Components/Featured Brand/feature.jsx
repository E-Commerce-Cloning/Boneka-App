import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";

const Featured = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <hr />
      <div
        style={{
          padding: `0 ${chevronWidth}px`,
          height: "150px",
          marginTop: "10px"
        }}
      >
        <ItemsCarousel
          infiniteLoop
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={7}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Ganti PC lama kamu
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/st/home/646b7e-featured brand 5.jpg"
                alt="Intel"
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default Featured;
