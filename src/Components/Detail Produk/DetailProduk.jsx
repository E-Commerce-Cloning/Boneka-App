import React, { Component } from "react";
import { Link } from "react-router-dom";
import laptop_img from "../../Assets/img/laptop.jpeg";
// import btn_delete from "./../Assets/img/trash.svg";
// import btn_next from "./../Assets/img/next.svg";
// import "./../Components/Keranjang.css";
import { Container, Row, Col, Card, Breadcrumb, Button } from "react-bootstrap";
class DetailProduk extends Component {
  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">. . .</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            ACER Predator Nitro 5 AN515-52 (Core i7-8750H) [UN.Q4ASN.001]
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
        </Breadcrumb>
        <Row>
          <Col xs={5}>
            <Card body>
              <img src={laptop_img} width="400px" align="center" />
            </Card>
          </Col>
          <Col>
            <Card body>
              <p>SKU02016309</p>
              <h2>
                ACER Predator Nitro 5 AN515-52 (Core i7-8750H) [UN.Q4ASN.001]
              </h2>
              <tr>
                <td>
                  <h5 style={{ marginLeft: "50px" }}>Harga</h5>
                </td>
                <td>
                  <h3 style={{ marginLeft: "20px", color: "red" }}>
                    Rp 15.015.000
                  </h3>
                  <br />
                  <Link to={`/chart`}>
                    <Button
                      style={{ marginLeft: "20px" }}
                      variant="warning"
                      size="lg"
                    >
                      <b>BELI SEKARANG</b>
                    </Button>
                  </Link>
                  <br />
                  <br />
                  <p style={{ marginLeft: "20px", color: "red" }}>
                    Siap dikirim dalam 1-3 hari
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 style={{ marginLeft: "50px" }}>Deskripsi</h5>
                </td>
                <td>
                  <p style={{ marginLeft: "20px" }}>
                    Processor: Intel Core i5-8265U RAM: 4GB DDR4 SSD: 256GB
                    Grafik: Intel UHD graphics Ukuran Layar: 13.3" FHD Sistem
                    Operasi: Windows 10 Pro
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 style={{ marginLeft: "50px" }}>Kelengkapan</h5>
                </td>
                <td>
                  <p style={{ marginLeft: "20px" }}>1 Unit Laptop</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 style={{ marginLeft: "50px" }}>Garansi</h5>
                </td>
                <td>
                  <p style={{ marginLeft: "20px" }}>5 Tahun</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 style={{ marginLeft: "50px" }}>Pengiriman</h5>
                </td>
                <td>
                  <p style={{ marginLeft: "20px" }}>
                    Dijual dan dikirim oleh Boneka
                  </p>
                </td>
              </tr>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DetailProduk;
