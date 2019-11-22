import React from "react";
import { Card, Button } from "react-bootstrap";
import "./cartEmpty.css";
import imgEmty from "../../../Assets/img/empty.svg";

const CartEmpty = () => {
  return (
    <>
      <h3
        style={{
          font: "bold",
          fontFamily: "Noto Sans",
          marginTop: "30px",
          marginLeft: "75px",
          marginBottom: "15px"
        }}
      >
        Keranjang Belanja
      </h3>

      <Card className="container">
        <Card.Body>
          <div style={{ marginLeft: "400px", alignItems: "center" }}>
            <img
              style={{ width: "160px" }}
              src={imgEmty}
              alt="Keranjang Kosong"
            />
            <h4>Keranjang Kosong</h4>
            <h6>Silahkan cari produk di Boneka</h6>
            <br />
            <Button href="/dashboard">KEMBALI BERBELANJA</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartEmpty;
