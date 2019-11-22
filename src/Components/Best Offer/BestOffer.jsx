import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import { getProduk } from "../../Public/Redux/actions/produk";
import "./BestOffer.css";

const BestOffer = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const dispatch = useDispatch();
  const produk = useSelector(state => state.produk.produkList);

  useEffect(() => {
    dispatch(getProduk());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "40px" }} className="container">
      <h4 style={{ fontFamily: "Noto Sans", font: "bold", marginLeft: "10px" }}>
        Best Offer
      </h4>
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
          numberOfCards={6}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
          width="200px"
        >
          {produk &&
            produk.length > 0 &&
            produk.map((produks, index) => {
              return (
                <div style={{ height: "300px" }}>
                  <Card style={{ width: "9rem", height: "4rem" }}>
                    <Link to={`/detail/${produks.id}`}>
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
      </div>
    </div>
  );
};

export default BestOffer;
