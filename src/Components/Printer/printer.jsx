import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";
import imgPrinter from "../../Assets/img/printer.jpg";
import "./Printer.css";

const Printer = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const produk = useSelector(state => state.produk.produkList);
  //console.log(`ini isi produk`, produk);

  const produkPrint = [];
  produk.map((state, index) => {
    if (state.nama_kategori === "Office and Store Supplies") {
      // console.log(state);
      produkPrint.push(state);
    }
  });

  return (
    <div style={{ marginTop: "120px" }} className="container">
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
              style={{ width: "250px", height: "230px", marginLeft: "-30px" }}
              src={imgPrinter}
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
              {produkPrint &&
                produkPrint.length > 0 &&
                produkPrint.map((produks, index) => {
                  return (
                    <div style={{ height: "300px" }}>
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

export default Printer;
