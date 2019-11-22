import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";
import imgMaintenance from "../../Assets/img/maintenance.jpg";
import "./Maintenance.css";

const Maintenance = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const produk = useSelector(state => state.produk.produkList);

  const produkMainten = [];
  produk.map((state, index) => {
    if (state.nama_kategori === "Electronics and Home") {
      // console.log(state);
      produkMainten.push(state);
    }
  });

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h4 style={{ fontFamily: "Noto Sans", font: "bold", marginLeft: "10px" }}>
        Maintenance, Repair, Operating
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
              style={{ width: "250px", height: "250px", marginLeft: "-30px" }}
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
              {produkMainten &&
                produkMainten.length > 0 &&
                produkMainten.map((produks, index) => {
                  return (
                    <div style={{ height: "250px" }}>
                      <Card style={{ width: "8rem", height: "4rem" }}>
                        <Link to={`detail/${produks.id}`}>
                          <Card.Img variant="top" src={produks.gambar} />
                          <Card.Body>
                            <Card.Title
                              className="title"
                              style={{ fontSize: "14px" }}
                            >
                              {produks.nama}
                            </Card.Title>
                            <Card.Text
                              style={{ fontSize: "11px", fontWeight: "bold" }}
                            >
                              Rp.&nbsp;
                              {produks.harga
                                .toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Card>
                    </div>
                  );
                })}
            </ItemsCarousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Maintenance;
