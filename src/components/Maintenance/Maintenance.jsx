import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";
import imgMaintenance from "../../assets/img/maintenance.jpg";

const Maintenance = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h4 style={{ fontFamily: "Noto Sans", font: "bold", marginLeft: "10px" }}>
        Printer dan Peralatan Kantor
      </h4>
      <hr />
      <div
        style={{
          padding: `0 ${chevronWidth}px`,
          height: "150px",
          marginTop: "10px"
        }}
      >
        <Row>
          <Col sm={4}>
            <img
              style={{ width: "250px", height: "230px" }}
              src={imgMaintenance}
              alt=""
            />
          </Col>
          <Col sm={8}>
            <ItemsCarousel
              infiniteLoop
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={5}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div style={{ height: "250px" }}>
                <Card style={{ width: "8rem", height: "4rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
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
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
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
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
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
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
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
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
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
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
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
                    src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      Card Title
                    </Card.Title>
                    <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                      Rp. 100.000
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </ItemsCarousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Maintenance;
